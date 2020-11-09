import React from 'react';
 
import whatsapp from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

interface PageHeaderProps {
    title?: string;
}

const TeacherItem: React.FC<PageHeaderProps> = (props) => {
    return (
        <article className='teacher-item'>
        <header>
            <img src='https://avatars0.githubusercontent.com/u/31524540?s=460&u=4ed060b4a70330c84fe3330209bd4da11ca1c08a&v=4' alt='Kaic Melo Santos' />
            <div>
                <strong>Kaic Melo Santos</strong>
                <span>Química</span>
            </div>
        </header>
        <p>
            Entusiata das melhores tecnologias de química avançada.<br />
            Apaixonado por explodir coisas em laboratório e por muda a vida das pessoas através de experiências.
            Mais de 200.000
        </p>

        <footer>
            <p>
            Preço/Hora
                <strong>R$ 200,00</strong>
            </p>
            <button type='button'>
                <img src={whatsapp} alt='whasapp' />
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;