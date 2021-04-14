import React from 'react';
import { Video } from '../../components/Video/Video';
import { DEVELOPERS } from '../../constants/constants';
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
            <Video source={'https://www.youtube.com/embed/NeQM1c-XCDc'} />
            <div className='home-about'>
                {DEVELOPERS.map((elem) => (
                    <div key={elem.name} className='home-about-developer'>
                        <div
                            className='home-about-developer-picture'
                            style={{ backgroundImage: `url(${elem.picture})` }}
                        ></div>
                        <div className='home-about-developer-text'>
                            <a href={elem.git} target='_blank' rel='noreferrer'>
                                {elem.name}
                            </a>
                            <p>{elem.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
