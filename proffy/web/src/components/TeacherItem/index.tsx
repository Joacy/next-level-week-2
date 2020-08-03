import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
    name: string;
};

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/9133457?s=460&u=c931a792ecf2c62c24f4f6c48467e7d9fa4ea014&v=4" alt="Joacy Mesquita" />
                <div>
                    <strong>{props.name}</strong>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
            </header>

            <p>
                Adipisci velit
                <br /><br />
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 50,00</strong>
                </p>

                <button type="button">
                    <img src={whatsapp} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;