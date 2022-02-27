import React from 'react';
import Production from './imgs/production.png';
import Calendar from './imgs/calendar.png';
import Price from './imgs/price.png';
import Partner from './imgs/partner.png';
import def from './imgs/def.png';
import time from './imgs/time.png';
import full from './imgs/full.png';
import delivery from './imgs/delivery.png';
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Work = () => {
    return (
        <section className="work">
            <div className="container">
                <h2 className="section__title work__title">Почему выгодно работать с нами</h2>
                <div className="work__swiper">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={250}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="work__row">
                                <div className="work__card">
                                    <div className="work__card_img">
                                        <img src={Production} alt="Production"/>
                                    </div>
                                    <div className="work__card_content">
                                        <h3 className="work__card_title">Собственное производство</h3>
                                        <p className="work__card_subtitle">Всю продукцию мы производим на собственных
                                            производственных площадках.
                                        </p>
                                    </div>
                                </div>
                                <div className="work__card">
                                    <div className="work__card_img">
                                        <img src={Calendar} alt="Calendar"/>
                                    </div>
                                    <div className="work__card_content">
                                        <h3 className="work__card_title">Работаем около 20 лет</h3>
                                        <p className="work__card_subtitle">На рынке пластмасс. Мы стабильная
                                            компания с огромным опытом производства.
                                            производственных площадках.</p>
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
                                        <h3 className="work__card_title">Долгосрочное сотрудничество</h3>
                                        <p className="work__card_subtitle">Хотим, чтобы наши клиенты увеличивали
                                            объемы продаж, получали больше прибыли и росли вместе с нами.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="work__row">
                                <div className="work__card">
                                    <div className="work__card_img">
                                        <img src={def} alt="Production"/>
                                    </div>
                                    <div className="work__card_content">
                                        <h3 className="work__card_title">Гарантия высокого качества</h3>
                                        <p className="work__card_subtitle">Уделяем внимание качеству производства и
                                            совершенствованию технологии. Маркируем наши товары специальным символом
                                            снежинкой.
                                        </p>
                                    </div>
                                </div>
                                <div className="work__card">
                                    <div className="work__card_img">
                                        <img src={delivery} alt="Production"/>
                                    </div>
                                    <div className="work__card_content">
                                        <h3 className="work__card_title">Бесперебойные поставки</h3>
                                        <p className="work__card_subtitle">Мы грамотно планируем производственный
                                            процесс так, чтобы отгрузка осуществлялась
                                            точно в срок. </p>
                                    </div>
                                </div>
                                <div className="work__card">
                                    <div className="work__card_img">
                                        <img src={full} alt="Production"/>
                                    </div>
                                    <div className="work__card_content">
                                        <h3 className="work__card_title">Полнота продуктовой линейки</h3>
                                        <p className="work__card_subtitle">Производим более 90 позиций комплектующих
                                            для сборки стеклопакетов. Постоянно вводим
                                            новые изделия одноразовой посуды.
                                        </p>
                                    </div>
                                </div>
                                <div className="work__card">
                                    <div className="work__card_img">
                                        <img src={time} alt="Production"/>
                                    </div>
                                    <div className="work__card_content">
                                        <h3 className="work__card_title">Оперативное выполнение заказов</h3>
                                        <p className="work__card_subtitle">Производственный цикл занимает около суток.
                                            Производство работает круглосуточно
                                            без перерывов и выходных.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;