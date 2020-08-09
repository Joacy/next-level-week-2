import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warning from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
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
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Input label="Matéria" name="subject" placeholder="Selecione qual você quer ensinar" />
                        <Input label="Custo da sua aula por hora " name="cost" />
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