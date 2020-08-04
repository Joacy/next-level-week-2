import express from 'express';
import db from './database/connection';

import convertTimeToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
}

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule,
    } = request.body;

    const trx = await db.transaction();

    const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
            week_day: scheduleItem.week_day,
            from: convertTimeToMinutes(scheduleItem.from),
            to: convertTimeToMinutes(scheduleItem.to),
            class_id,
        };
    });

    await trx('class_schedule').insert(classSchedule);

    await trx.commit();
    
    return response.send();
});

export default routes;