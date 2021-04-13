import React from 'react';
import './Homepage.scss';
import nimlu from '../../assets/img/nimlu.jpg';
import fedya from '../../assets/img/fedya.jpg';
import { Video } from '../../components/Video/Video';
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
                <div className='home-about-developer'>
                    <div className='home-about-developer-picture'></div>
                    <div className='home-about-developer-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero magni vitae quia
                        molestiae culpa temporibus est inventore asperiores, velit ad facilis at consequuntur
                        architecto, pariatur, deleniti provident rem nulla veritatis minima delectus itaque neque quidem
                        omnis! Repudiandae, odit tempore?
                    </div>
                </div>
                <div className='home-about-developer'>
                    <div className='home-about-developer-picture' style={{ backgroundImage: `url(${nimlu})` }}></div>
                    <div className='home-about-developer-text'>
                        <b>Сергей Нестеров</b>. Системный администратор в гос. конторе. Как известно, системный
                        администратор — это личинка программиста. В работе приходилось использовать маленькие самописные
                        скрипты. Однажды пришло понимание, что личинка должна стать чем-то большим. Просторы интернета
                        подсказали путь в RS School. Так как кое-какой бекграунд уже был, сначала обучение показалось
                        очень легким, но тут начался React — и время резко закончилось. К концу React я понял, что даже
                        самые сложные по началу задания на самом деле вполне выполнимы и с небольшими подсказками
                        ментора на конечном этапе выглядят даже легкими. Основное, чему я научился в RS School — это то,
                        что все, даже самые сложные, задачи можно решить, главное не сдаваться на полпути.
                    </div>
                </div>
                <div className='home-about-developer'>
                    <div className='home-about-developer-picture'></div>
                    <div className='home-about-developer-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, odio tenetur minima
                        doloremque dignissimos beatae numquam facere harum optio cumque iusto vel dolorem explicabo
                        quisquam consequuntur veritatis animi vitae amet accusamus nam, est voluptatem. Officiis
                        assumenda voluptas enim dolorum nobis.
                    </div>
                </div>
                <div className='home-about-developer'>
                    <div className='home-about-developer-picture' style={{ backgroundImage: `url(${fedya})` }}></div>
                    <div className='home-about-developer-text'>
                        <b>Фёдор Микулич</b>. Музыкант, артист оркестра. С шести лет я учился беспрерывно: школа,
                        музыкальная школа, колледж, консерватория. Окончив консерваторию, осознал, что нужно учиться
                        дальше, но в другой сфере. Так, я попал в IT, и продолжил свой путь “вечного студента”.
                        Компьютерная академия “ШАГ”, курсы “ОR media” и вот я в RS School. За время обучения в RS School
                        я заполнил пробелы в знаниях и навыках, улучшил свой код. Однако впереди еще много чего нужно
                        узнать и изучить. И вообще, IT — “непаханное поле” для “вечного студента”! То, что я так люблю.
                    </div>
                </div>
            </div>
        </div>
    );
};
