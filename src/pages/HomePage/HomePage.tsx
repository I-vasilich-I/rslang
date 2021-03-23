import React from 'react';
import './Homepage.scss';
import { SignIn } from '../../components/SignIn/SingIn';

export const HomePage: React.FC = () => {
    return (
        <div className='home-wrapper'>
            <h1>Home</h1>
            <div className='home-advantages'>
                <div className='home__text'>
                    <h3>онлайн обучение</h3>
                    <h2>
                        Изучайте <br /> <b>каждый день</b>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta quibusdam cumque sit
                        cupiditate. Aliquid ab incidunt ratione? Delectus, ratione.
                    </p>
                    <a href='#' className='button'>
                        Узнать больше
                    </a>
                </div>
            </div>

            <div className='join-to'>
                <div className='join-to__text'>
                    <h3>Получите доступ к качественному обучению!</h3>
                    <h2>
                        Присоединяйтесь к онлайн-курсам <br /> <b>сегодня</b>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta quibusdam cumque sit
                        cupiditate. Aliquid ab incidunt ratione? Delectus, ratione.
                    </p>
                    <a href='#' className='button'>
                        Узнать больше
                    </a>
                </div>
            </div>

            <div className='work-out'>
                <div className='work-out__text'>
                    <h3>Тренируйте свой мозг сегодня!</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta quibusdam cumque sit
                        cupiditate. Aliquid ab incidunt ratione? Delectus, ratione.
                    </p>
                    <a href='#' className='button'>
                        Узнать больше
                    </a>
                </div>
            </div>

            <SignIn />

            {/* <div className='registration'>
                <form action='#' className='form-body'>
                    <h3>Регистрация</h3>
                    <input type='text' placeholder='Enter your name' />
                    <input type='email' placeholder='Enter your email' />
                    <input type='password' placeholder='Enter your password' />
                    <div className='form_button'>
                        <input className='button' type='button' value='OK' />
                        <input className='button' type='button' value='NO' />
                    </div>
                </form>
            </div> */}

            {/* <div className='home-video'>
                <iframe
                    width='1000px'
                    height='530px'
                    src='https://www.youtube.com/embed/NeQM1c-XCDc'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    title='Video'
                    allowFullScreen={true}
                ></iframe>
            </div> */}
            {/* <div className='home-about'>about</div> */}
        </div>
    );
};
