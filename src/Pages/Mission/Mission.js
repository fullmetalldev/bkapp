import React from 'react';
import './mission.scss';
import Quality from './img/quality.png';
import Partner from './img/partner.png';
import Innovation from './img/innovation.png';

const Mission = () => {
    return (
        <main>
            <section className="mission">
                <div className="container">
                    <p className="section__navi"><a className="navLink" href="/">Главная</a> / Миссия</p>
                    <h1 className="section__title">Миссия</h1>
                    <h2 className="mission__title">Мы создаем современные безопасные товары, <br/>
                        улучшающие жизнь людей.
                    </h2>
                    <div className="mission__row">
                        <div className="mission__card">
                            <img src={Quality} alt="Quality"/>
                            <h3 className="mission__card_title">Качество и экологичность</h3>
                            <p className="mission__card_subtitle">Гарантируем высокое качество на всех этапах
                                производства для сохранения здоровья людей и окружающей среды.</p>
                        </div>
                        <div className="mission__card">
                            <img src={Partner} alt="Partner"/>
                            <h3 className="mission__card_title">Партнерство</h3>
                            <p className="mission__card_subtitle">Мы заинтересованы в росте и развитии наших клиентов,
                                партнеров, поставщиков и сотрудников.
                            </p>
                        </div>
                        <div className="mission__card">
                            <img src={Innovation} alt="Innovation"/>
                            <h3 className="mission__card_title">Инновации</h3>
                            <p className="mission__card_subtitle">Используем современные безопасные материалы и добавки,
                                высокотехнологичное оборудование для создания уникальных свойств изделий.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Mission;