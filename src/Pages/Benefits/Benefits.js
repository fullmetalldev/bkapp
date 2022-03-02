import React from 'react';
import './benefits.scss';
import Production from "../Home/imgs/production.png";
import Calendar from "../Home/imgs/calendar.png";
import Price from "../Home/imgs/price.png";
import Partner from "../Home/imgs/partner.png";
import Guarantee from "../Benefits/img/garantee.png";
import Delivery from "../Benefits/img/delivery.png";
import Full from "../Benefits/img/full.png";
import Time from "../Benefits/img/time.png";

const Benefits = () => {
    return (
        <main>
            <section className="benefits">
                <div className="container">
                    <p className="section__navi"><a className="navLink" href="/">Главная</a> / Преимущества</p>
                    <h1 className="section__title">Преимущества</h1>
                    <h2 className="benefits__title">Наша цель – выпускать высококачественные товары,
                        чтобы наши клиенты зарабатывали еще больше!</h2>
                    <div className="benefits__row">
                        <div className="work__card">
                            <div className="work__card_img">
                                <img src={Production} alt="Production"/>
                            </div>
                            <div className="work__card_content">
                                <h3 className="work__card_title">Собственное производство</h3>
                                <p className="work__card_subtitle">Всю продукцию мы производим на собственных</p>
                            </div>
                        </div>
                        <div className="work__card">
                            <div className="work__card_img">
                                <img src={Calendar} alt="Calendar"/>
                            </div>
                            <div className="work__card_content">
                                <h3 className="work__card_title">Работаем около 20 лет</h3>
                                <p className="work__card_subtitle">На рынке пластмасс. Мы стабильная
                                    компания с огромным опытом производства.</p>
                            </div>
                        </div>
                        <div className="work__card">
                            <div className="work__card_img">
                                <img src={Price} alt="Price"/>
                            </div>
                            <div className="work__card_content">
                                <h3 className="work__card_title">Конкурентные цены</h3>
                                <p className="work__card_subtitle">На оптовые партии товара.</p>
                            </div>
                        </div>
                        <div className="work__card">
                            <div className="work__card_img">
                                <img src={Partner} alt="Production"/>
                            </div>
                            <div className="work__card_content">
                                <h3 className="work__card_title">Долгосрочное сотруднисество</h3>
                                <p className="work__card_subtitle">Хотим, чтобы наши клиенты увеличивали
                                    объемы продаж, получали больше прибыли и росли вместе с нами.</p>
                            </div>
                        </div>
                        <div className="work__card">
                            <div className="work__card_img">
                                <img src={Guarantee} alt="Guarantee"/>
                            </div>
                            <div className="work__card_content">
                                <h3 className="work__card_title">Гарантия высокого качества</h3>
                                <p className="work__card_subtitle">Уделяем внимание качеству производства и
                                    совершенствованию технологии. Маркируем наши товары специальным символом снежинкой.
                                </p>
                            </div>
                        </div>
                        <div className="work__card">
                            <div className="work__card_img">
                                <img src={Delivery} alt="Calendar"/>
                            </div>
                            <div className="work__card_content">
                                <h3 className="work__card_title">Бесперебойные поставки</h3>
                                <p className="work__card_subtitle">Мы грамотно планируем производственный
                                    процесс так, чтобы отгрузка осуществлялась точно в срок. </p>
                            </div>
                        </div>
                        <div className="work__card">
                            <div className="work__card_img">
                                <img src={Full} alt="Full"/>
                            </div>
                            <div className="work__card_content">
                                <h3 className="work__card_title">Полнота продуктовой линейки</h3>
                                <p className="work__card_subtitle">Производим более 90 позиций комплектующих
                                    для сборки стеклопакетов. Постоянно вводим новые изделия одноразовой посуды.
                                </p>
                            </div>
                        </div>
                        <div className="work__card">
                            <div className="work__card_img">
                                <img src={Time} alt="Time"/>
                            </div>
                            <div className="work__card_content">
                                <h3 className="work__card_title">Оперативное выполнение заказов</h3>
                                <p className="work__card_subtitle">производственный цикл занимает около суток.
                                    Производство работает круглосуточно без перерывов и выходных.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Benefits;