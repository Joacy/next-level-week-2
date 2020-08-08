import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form action="">
                    <fieldset>
                        <legend>Seus dados</legend>

                        <div className="input-block">
                            <label htmlFor="name">Nome completo</label>
                            <input type="text" id="name" />
                        </div>
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;