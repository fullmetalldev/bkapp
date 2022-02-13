import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper";

const FirstScreen = () => {
    return (
        <section className="first-screen">
            <div className="container">
                <div className="first-screen__row">
                    <div className="first-screen__card first-screen__left">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Navigation, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="first-screen__card_first first-screen__card_item">
                                    <div className="first-screen__card_content">
                                        <h1 className="first-screen__card_title">Производство</h1>
                                        <p className="first-screen__card_subtitle">Комплектующих для сборки окон пвх</p>
                                        <div className="first-screen__card_btns">
                                            <button className="first-screen__card_btns-left btn">Перейти в каталог</button>
                                            <button className="first-screen__card_btns-right btn">Скачать каталог</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="first-screen__card_first first-screen__card_item">
                                    <div className="first-screen__card_content">
                                        <h1 className="first-screen__card_title">Производство</h1>
                                        <p className="first-screen__card_subtitle">Комплектующих для сборки окон пвх</p>
                                        <div className="first-screen__card_btns">
                                            <button className="first-screen__card_btns-left btn">Перейти в каталог</button>
                                            <button className="first-screen__card_btns-right btn">Скачать каталог</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="first-screen__card_first first-screen__card_item">
                                    <div className="first-screen__card_content">
                                        <h1 className="first-screen__card_title">Производство</h1>
                                        <p className="first-screen__card_subtitle">Комплектующих для сборки окон пвх</p>
                                        <div className="first-screen__card_btns">
                                            <button className="first-screen__card_btns-left btn">Перейти в каталог</button>
                                            <button className="first-screen__card_btns-right btn">Скачать каталог</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="first-screen__card_first first-screen__card_item">
                                    <div className="first-screen__card_content">
                                        <h1 className="first-screen__card_title">Производство</h1>
                                        <p className="first-screen__card_subtitle">Комплектующих для сборки окон пвх</p>
                                        <div className="first-screen__card_btns">
                                            <button className="first-screen__card_btns-left btn">Перейти в каталог</button>
                                            <button className="first-screen__card_btns-right btn">Скачать каталог</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="first-screen__card first-screen__right">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Navigation, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="first-screen__card_second first-screen__card_item">
                                    <div className="first-screen__card_content">
                                        <h1 className="first-screen__card_title">Производство</h1>
                                        <p className="first-screen__card_subtitle">Одноразовой посуды</p>
                                        <div className="first-screen__card_btns">
                                            <button className="first-screen__card_btns-left btn">Перейти в каталог</button>
                                            <button className="first-screen__card_btns-right btn">Скачать каталог</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="first-screen__card_second first-screen__card_item">
                                    <div className="first-screen__card_content">
                                        <h1 className="first-screen__card_title">Производство</h1>
                                        <p className="first-screen__card_subtitle">Одноразовой посуды</p>
                                        <div className="first-screen__card_btns">
                                            <button className="first-screen__card_btns-left btn">Перейти в каталог</button>
                                            <button className="first-screen__card_btns-right btn">Скачать каталог</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="first-screen__card_second first-screen__card_item">
                                    <div className="first-screen__card_content">
                                        <h1 className="first-screen__card_title">Производство</h1>
                                        <p className="first-screen__card_subtitle">Одноразовой посуды</p>
                                        <div className="first-screen__card_btns">
                                            <button className="first-screen__card_btns-left btn">Перейти в каталог</button>
                                            <button className="first-screen__card_btns-right btn">Скачать каталог</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="first-screen__card_second first-screen__card_item">
                                    <div className="first-screen__card_content">
                                        <h1 className="first-screen__card_title">Производство</h1>
                                        <p className="first-screen__card_subtitle">Одноразовой посуды</p>
                                        <div className="first-screen__card_btns">
                                            <button className="first-screen__card_btns-left btn">Перейти в каталог</button>
                                            <button className="first-screen__card_btns-right btn">Скачать каталог</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstScreen;