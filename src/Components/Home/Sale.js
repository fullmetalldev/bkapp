import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Sale = () => {
    return (
        <section className="sale">
            <div className="container">
<<<<<<< HEAD

            </div>
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="sale__card">
                        <div className="container">
                            <h2 className="sale__title">Акция</h2>
                            <h3 className="sale__subtitle">Набор для работы</h3>
                            <button className="sale__btn">Купить сейчас</button>
=======
                <Swiper
                    direction={"vertical"}
                    slidesPerView={1}
                    spaceBetween={0}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="sale__card">
                            <div className="container">
                                <h2 className="sale__title">Акция</h2>
                                <h3 className="sale__subtitle">Набор для работы</h3>
                                <button className="sale__btn">Купить сейчас</button>
                            </div>
>>>>>>> 1f403e257be8db201e580a65d610f7bdaff088a6
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sale__card">
                            <div className="container">
                                <h2 className="sale__title">Акция2</h2>
                                <h3 className="sale__subtitle">Набор для работы</h3>
                                <button className="sale__btn">Купить сейчас</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sale__card">
                            <div className="container">
                                <h2 className="sale__title">Акция3</h2>
                                <h3 className="sale__subtitle">Набор для работы</h3>
                                <button className="sale__btn">Купить сейчас</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sale__card">
                            <div className="container">
                                <h2 className="sale__title">Акция4</h2>
                                <h3 className="sale__subtitle">Набор для работы</h3>
                                <button className="sale__btn">Купить сейчас</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Sale;