import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (
        <div id='page-teacher-list' className='container'>
            <PageHeader title='Estes são os proffys disponíveis' >
                <form id='search-teachers'>
                    <div className='input-block'>
                        <label htmlFor='subject'>Matéria</label>
                        <input type='text' id='subject' />
                    </div>
                    
                    <div className='input-block'>
                        <label htmlFor='week_day'>Dia da Semana</label>
                        <input type='text' id='week_day' />
                    </div>

                    <div className='input-block'>
                        <label htmlFor='time'>Hora</label>
                        <input type='text' id='time' />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className='teacher-item'>
                    <header>
                        <img src='' alt='Kaic Melo Santos' />
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
            </main>
        </div>
    );
}

export default TeacherList;