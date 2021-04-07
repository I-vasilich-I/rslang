import React from 'react';
import './Homepage.scss';

export const HomePage: React.FC = () => {
    return (
        <div className='home-wrapper'>
            <h1>Главная</h1>
            <div className='home-advantages'>
                <div className='home__text'>
                    <h3>онлайн обучение</h3>
                    <h2>
                        Изучайте <br /> <b>каждый день</b>
                    </h2>
                    <p>
                        Изучение английского языка в современных реалиях становится все более и более актуальным
                        занятием.
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
                        Присоединяйтесь <br /> <b>сегодня</b>
                    </h2>
                    <p>
                        Присоединяйтесь к числу наших друзей! Мы помогаем всем желающим овладеть не только основами
                        английского языка, но овладеть им настолько, что общение с иностранцами не будет вызывать
                        никакого затруднения. Легкое и интересное обучение, минимум скучной рутины!
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
                        Многие работники фирм усиленно занимаются своей карьерой, часто предприятия выходят на новый
                        уровень, развивают филиалы за рубежом, некоторые люди самостоятельно уезжают работать за
                        границу. Тут без знания иностранного не обойтись. И речь идет не о бытовом, а о продвинутом
                        уровне, ведь постоянно придется обсуждать рабочие вопросы с коллегами.
                    </p>
                    <a href='#' className='button'>
                        Узнать больше
                    </a>
                </div>
            </div>

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
