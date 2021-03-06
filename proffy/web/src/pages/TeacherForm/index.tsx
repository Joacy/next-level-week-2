import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warning from '../../assets/images/icons/warning.svg';

import './styles.css';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    };

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={() => { }}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input label="Nome Completo" name="name" />
                        <Input label="Avatar" name="avatar" />
                        <Input label="Whatsapp" name="whatsapp" />
                        <Textarea label="Biografia" name="bio" />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            label="Matéria"
                            name="subject"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Língua Portuguesa', label: 'Língua Portuguesa' },
                            ]}
                        />
                        <Input label="Custo da sua aula por hora " name="cost" />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis

                            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        label="Dia da semana"
                                        name="week-day"
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input label="Das" name="from" type="time" />
                                    <Input label="Até" name="to" type="time" />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warning} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>

                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;