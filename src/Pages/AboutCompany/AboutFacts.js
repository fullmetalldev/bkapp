import React from 'react';
import Protect from './img/protect.png';
import Medal from './img/medal.png';
import Man from './img/manpng.png';
import Train from './img/train.png';
import Pan from './img/pan.png';
import Market from './img/market.png';
import Box from './img/boxpng.png';
import Time from './img/timepng.png';

const AboutFacts = () => {
    return (
        <section className="aboutFacts">
            <div className="container">
                <h2 className="section__title">Факты о БК:</h2>
                <div className="aboutFacts__row">
                    <div className="aboutFacts__card">
                        <div className="aboutFacts__card_img">
                            <img src={Protect} alt="Protect"/>
                        </div>
                        <p className="aboutFacts__card_title">Гарантируем стабильный уровень качества изделий.</p>
                    </div>
                    <div className="aboutFacts__card">
                        <div className="aboutFacts__card_img">
                            <img src={Medal} alt="Medal"/>
                        </div>
                        <p className="aboutFacts__card_title">На производстве внедрена система качества.</p>
                    </div>
                    <div className="aboutFacts__card">
                        <div className="aboutFacts__card_img">
                            <img src={Man} alt="Man"/>
                        </div>
                        <p className="aboutFacts__card_title">В компании работает высокопрофессиональный технический
                            персонал.
                        </p>
                    </div>
                    <div className="aboutFacts__card">
                        <div className="aboutFacts__card_img">
                            <img src={Train} alt="Train"/>
                        </div>
                        <p className="aboutFacts__card_title">Все изделия производятся на современном оборудовании,
                            которое застраховано</p>
                    </div>
                    <div className="aboutFacts__card">
                        <div className="aboutFacts__card_img">
                            <img src={Pan} alt="Pan"/>
                        </div>
                        <p className="aboutFacts__card_title">Постоянно поддерживаем полноту продуктовой линейки товаров
                            и услуг.
                        </p>
                    </div>
                    <div className="aboutFacts__card">
                        <div className="aboutFacts__card_img">
                            <img src={Market} alt="Market"/>
                        </div>
                        <p className="aboutFacts__card_title">Проводим маркетинговые исследования рынка..</p>
                    </div>
                    <div className="aboutFacts__card">
                        <img src={Box} alt="Box"/>
                        <p className="aboutFacts__card_title">Постоянно расширяем ассортимент товаров и услуг.</p>
                    </div>
                    <div className="aboutFacts__card">
                        <div className="aboutFacts__card_img">
                            <img src={Time} alt="Time"/>
                        </div>
                        <p className="aboutFacts__card_title">Гарантируем оперативное выполнение заказов.</p>
                    </div>
                </div>
                <p className="aboutFacts__subtitle">В планах компании на ближайшие несколько лет — выпуск новой
                    продукции в посудном и строительном направлении, запуск нового оборудования, расширение клиентской
                    базы, увеличение объемов производства.</p>
                <p className="aboutFacts__descr">
                    Е. В. Ефанов, директор БК: «Стратегия развития нашей компании не изменилась в связи пандемией и
                    только усилила веру в наш продукт. Во время пандемии не было недостатка в заказах, а сейчас спрос в
                    посудном направлении продолжает увеличиваться. Мы стали четче понимать, какие направления нам нужно
                    усиливать, какие новые пресс-формы ввести в будущем. Скорее всего, в ближайшее время мы приступим к
                    разработке и изготовлению пресс-формы для нового вида продукции. Также мы видим перспективу в
                    увеличении ассортимента по некоторым имеющимся позициям, спрос на которые вне зависимости от
                    ситуации стабилен и склонен к росту» Компания растет, строит планы, развивается, внедряет новые сервисы, проводит исследования рынка и
                    своего продукта. БК предлагает клиентам выгодные условия сотрудничества, - мы заинтересованы в росте наших клиентов,
                    их благополучии и развитии.</p>
            </div>
        </section>
    );
};

export default AboutFacts;