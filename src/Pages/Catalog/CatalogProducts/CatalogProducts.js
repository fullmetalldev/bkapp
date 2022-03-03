import React, {useState} from 'react';
import "./catalogProducts.css";
import arrow from "./imgs/arrowDown.png"
import product1 from "./imgs/product1.png";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CatalogProducts = () => {

    const [pageNum, setPageNum] = useState('1');

    const [filter1, setFilter1] = useState(false);
    const [filter2, setFilter2] = useState(false);
    const [filter3, setFilter3] = useState(false);
    const [filter4, setFilter4] = useState(false);

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
                    <div className="filterjustify" onClick={() => setFilter1(!filter1)}>
                        <span className="titleFilter">Объем</span>
                        <img className={filter1 ? "arrow arrowActive" : "arrow"} src={arrow} alt="arrow"/>
                    </div>

                    <div
                        className={filter1 ? "sectionCatalog__filterRow-checkRow sectionCatalog__filterRow-checkRowActive" : "sectionCatalog__filterRow-checkRow"}>
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
                    <div className="filterjustify" onClick={() => setFilter2(!filter2)}>
                        <span className="titleFilter">Цвет</span>
                        <img className={filter2 ? "arrow arrowActive" : "arrow"} src={arrow} alt="arrow"/>
                    </div>

                    <div
                        className={filter2 ? "sectionCatalog__filterRow-checkRow sectionCatalog__filterRow-checkRowActive" : "sectionCatalog__filterRow-checkRow"}>
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
                    <div className="filterjustify" onClick={() => setFilter3(!filter3)}>
                        <span className="titleFilter">Диаметр</span>
                        <img className={filter3 ? "arrow arrowActive" : "arrow"} src={arrow} alt="arrow"/>
                    </div>

                    <div
                        className={filter3 ? "sectionCatalog__filterRow-checkRow sectionCatalog__filterRow-checkRowActive" : "sectionCatalog__filterRow-checkRow"}>
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
                    <div className="filterjustify" onClick={() => setFilter4(!filter4)}>
                        <span className="titleFilter">Материал</span>
                        <img className={filter4 ? "arrow arrowActive" : "arrow"} src={arrow} alt="arrow"/>
                    </div>

                    <div
                        className={filter4 ? "sectionCatalog__filterRow-checkRow sectionCatalog__filterRow-checkRowActive" : "sectionCatalog__filterRow-checkRow"}>
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
                <a className="sectionCatalog__afterFilterButtons-href more__hover" href="#test">Сбросить параметры</a>
                <button className="sectionCatalog__afterFilterButtons-button btn-hover">
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="/catalog/assecories/product">
                                <img className="sectionCatalog__productsRow-card_img" src={product1} alt="product1"/>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <h2 className="sectionCatalog__productsRow-card_name">Мост опорный Артек 530</h2>
                    <span className="sectionCatalog__productsRow-card_ml">360 мл</span>
                    <button className="sectionCatalog__productsRow-card_btn btn-hover">Заказать</button>
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