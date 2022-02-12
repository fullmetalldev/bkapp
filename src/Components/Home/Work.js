import React from 'react';
import Production from './imgs/production.png';
import Calendar from './imgs/calendar.png';
import Price from './imgs/price.png';
import Partner from './imgs/partner.png';
import Bag from './imgs/bag3.png';
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Work = () => {
    return (
        <section className="work">
            <img className="work__img" src={Bag} alt="Bag"/>
            <div className="container">
                <h2 className="section__title work__title">Почему выгодно работать с нами</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
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
                                        производственных площадках.</p>
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
                                    <h3 className="work__card_title">Долгосрочное сотруднисество</h3>
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
                                    <img src={Production} alt="Production"/>
                                </div>
                                <div className="work__card_content">
                                    <h3 className="work__card_title">Собственное производство</h3>
                                    <p className="work__card_subtitle">Всю продукцию мы производим на собственных
                                        производственных площадках.</p>
                                </div>
                            </div>
                            <div className="work__card">
                                <div className="work__card_img">
                                    <img src={Production} alt="Production"/>
                                </div>
                                <div className="work__card_content">
                                    <h3 className="work__card_title">Собственное производство</h3>
                                    <p className="work__card_subtitle">Всю продукцию мы производим на собственных
                                        производственных площадках.</p>
                                </div>
                            </div>
                            <div className="work__card">
                                <div className="work__card_img">
                                    <img src={Production} alt="Production"/>
                                </div>
                                <div className="work__card_content">
                                    <h3 className="work__card_title">Собственное производство</h3>
                                    <p className="work__card_subtitle">Всю продукцию мы производим на собственных
                                        производственных площадках.</p>
                                </div>
                            </div>
                            <div className="work__card">
                                <div className="work__card_img">
                                    <img src={Production} alt="Production"/>
                                </div>
                                <div className="work__card_content">
                                    <h3 className="work__card_title">Собственное производство</h3>
                                    <p className="work__card_subtitle">Всю продукцию мы производим на собственных
                                        производственных площадках.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Work;