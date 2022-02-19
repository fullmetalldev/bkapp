import React, {useState} from 'react';
import "./catalogProducts.css";
import arrow from "./imgs/arrowDown.png"
import product1 from "./imgs/product1.png";
import product2 from "./imgs/product2.png";
import product3 from "./imgs/product3.png";
import product4 from "./imgs/product4.png";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Supnica from "../../PlasticTableware/img/supnicapng.png";
import Containers222 from "../../PlasticTableware/img/containers222.png";
import Sousnica from "../../PlasticTableware/img/sousnica.png";

const CatalogProducts = () => {

    const [pageNum, setPageNum] = useState('1');

    const page = (event) => {
        document.querySelectorAll('.sectionCatalog__pagesChange-page').forEach((element) => {
            element.classList.remove('activePage')
        });
        event.classList.add('activePage');
        setPageNum(event.textContent);
    };


    return (
        <>
            <h2 className="section__title">Наши товары</h2>
            <div className="sectionCatalog__filterRow">
                <div className="sectionCatalog__filterRow-filter">
                    <span className="titleFilter">Объем</span>
                    <img className="arrow" src={arrow} alt="arrow"/>
                    <div className="sectionCatalog__filterRow-checkRow">
                        <div className="checkboxRow">
                            <input className="sectionCatalog__filterRow-checkbox" type="checkbox"/>
                            <h4 className="checkboxTitle">Прозрачный</h4>
                        </div>
                        <div className="checkboxRow">
                            <input className="sectionCatalog__filterRow-checkbox" type="checkbox"/>
                            <h4 className="checkboxTitle">Белый</h4>
                        </div>
                    </div>
                </div>
                <div className="sectionCatalog__filterRow-filter">
                    <span className="titleFilter">Цвет</span>
                    <img className="arrow" src={arrow} alt="arrow"/>
                    <div className="sectionCatalog__filterRow-checkRow">
                        <div className="checkboxRow">
                            <input className="sectionCatalog__filterRow-checkbox" type="checkbox"/>
                            <h4 className="checkboxTitle">Прозрачный</h4>
                        </div>
                        <div className="checkboxRow">
                            <input className="sectionCatalog__filterRow-checkbox" type="checkbox"/>
                            <h4 className="checkboxTitle">Белый</h4>
                        </div>
                    </div>
                </div>

                <div className="sectionCatalog__filterRow-filter">
                    <span className="titleFilter">Диаметр</span>
                    <img className="arrow" src={arrow} alt="arrow"/>
                    <div className="sectionCatalog__filterRow-checkRow">
                        <div className="checkboxRow">
                            <input className="sectionCatalog__filterRow-checkbox" type="checkbox"/>
                            <h4 className="checkboxTitle">Прозрачный</h4>
                        </div>
                        <div className="checkboxRow">
                            <input className="sectionCatalog__filterRow-checkbox" type="checkbox"/>
                            <h4 className="checkboxTitle">Белый</h4>
                        </div>
                    </div>
                </div>

                <div className="sectionCatalog__filterRow-filter">
                    <span className="titleFilter">Материал</span>
                    <img className="arrow" src={arrow} alt="arrow"/>
                    <div className="sectionCatalog__filterRow-checkRow">
                        <div className="checkboxRow">
                            <input className="sectionCatalog__filterRow-checkbox" type="checkbox"/>
                            <h4 className="checkboxTitle">Прозрачный</h4>
                        </div>
                        <div className="checkboxRow">
                            <input className="sectionCatalog__filterRow-checkbox" type="checkbox"/>
                            <h4 className="checkboxTitle">Белый</h4>
                        </div>
                    </div>
                </div>

            </div>

            <div className="sectionCatalog__afterFilterButtons">
                <a className="sectionCatalog__afterFilterButtons-href" href="#test">Сбросить параметры</a>
                <button className="sectionCatalog__afterFilterButtons-button">
                    Показать результат
                </button>
            </div>

            <div className="sectionCatalog__productsRow">

                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>
                <div className="sectionCatalog__productsRow-card">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
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
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn">Заказать</button>
                    <a className="sectionCatalog__productsRow-card_href">Смотреть подробнее</a>
                </div>

            </div>

            <div className="sectionCatalog__pagesChange">
                <button onClick={(event) => page(event.target)}
                        className="sectionCatalog__pagesChange-page activePage">1
                </button>
                <button onClick={(event) => page(event.target)} className="sectionCatalog__pagesChange-page">2</button>
                <button onClick={(event) => page(event.target)} className="sectionCatalog__pagesChange-page">3</button>
                <button onClick={(event) => page(event.target)} className="sectionCatalog__pagesChange-page">4</button>
                <button onClick={(event) => page(event.target)} className="sectionCatalog__pagesChange-page">5</button>
            </div>

        </>
    );
};

export default CatalogProducts;