import React from 'react';
import CatalogBtns from "../../Components/CatalogBtns/CatalogBtns";
import './plasticTableware.scss';
import Supnica from './img/supnicapng.png';
import Containers222 from './img/containers222.png';
import Sousnica from './img/sousnica.png';
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {NavLink} from "react-router-dom";
import arrow from "./img/arrowDown.png";

const PlasticTableware = () => {
    return (
        <main>
            <section className="plasticTablewareHome">
                <div className="container">
                    <h1 className="section__title">Каталог пластиковой посуды</h1>
                    <p className="plasticTablewareHome__subtitle">Используем современные безопасные материалы и добавки,
                        высокотехнологичное оборудование для создания уникальных свойств изделий.</p>
                    <CatalogBtns/>
                    <div className="plasticTablewareHome__row">
                        <div className="plasticTablewareHome__card first">
                            <h3 className="plasticTablewareHome__card_title">Пластиковые контейнеры</h3>
                        </div>
                        <div className="plasticTablewareHome__card second">
                            <h3 className="plasticTablewareHome__card_title">Столовые приборы</h3>
                        </div>
                        <div className="plasticTablewareHome__card third">
                            <h3 className="plasticTablewareHome__card_title">Соусник одноразовый</h3>
                        </div>
                        <div className="plasticTablewareHome__card fourth">
                            <h3 className="plasticTablewareHome__card_title">Укупорка</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="plasticTablewareCatalog">
                <div className="container">
                    <div className="plasticTablewareCatalog__row">
                        <div className="plasticTablewareCatalog__sort">
                            <div className="plasticTablewareCatalog__sort-div">
                                <div className="plasticTablewareCatalog__sort_title">Подбор по параметрам</div>
                                <div className="plasticTablewareCatalog__sort_filterDiv">

                                    <div className="plasticTablewareCatalog__sort_filter">
                                        <div className="arrowAndInfo">
                                            <h2 className="plasticTablewareCatalog__sort_filter-title">Объем</h2>
                                            <img className="arrow" src={arrow} alt="arrow"/>
                                        </div>

                                        <div className="plasticTablewareCatalog__sort_filter-filters">
                                            <div>
                                                <input className="checkbox" type="checkbox"/>
                                                <span className="checkbox__title">Белый</span>
                                            </div>
                                            <div>
                                                <input className="checkbox" type="checkbox"/>
                                                <span className="checkbox__title">Прозрачный</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="plasticTablewareCatalog__sort_filter">
                                        <div className="arrowAndInfo">
                                            <h2 className="plasticTablewareCatalog__sort_filter-title">Диаметр</h2>
                                            <img className="arrow" src={arrow} alt="arrow"/>
                                        </div>

                                        <div className="plasticTablewareCatalog__sort_filter-filters">
                                            <div>
                                                <input className="checkbox" type="checkbox"/>
                                                <span className="checkbox__title">Белый</span>
                                            </div>
                                            <div>
                                                <input className="checkbox" type="checkbox"/>
                                                <span className="checkbox__title">Прозрачный</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="plasticTablewareCatalog__sort_filter">
                                        <div className="arrowAndInfo">
                                            <h2 className="plasticTablewareCatalog__sort_filter-title">Материал</h2>
                                            <img className="arrow" src={arrow} alt="arrow"/>
                                        </div>

                                        <div className="plasticTablewareCatalog__sort_filter-filters">
                                            <div>
                                                <input className="checkbox" type="checkbox"/>
                                                <span className="checkbox__title">Белый</span>
                                            </div>
                                            <div>
                                                <input className="checkbox" type="checkbox"/>
                                                <span className="checkbox__title">Прозрачный</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="plasticTablewareCatalog__sort_filter">
                                        <div className="arrowAndInfo">
                                            <h2 className="plasticTablewareCatalog__sort_filter-title">Цвет</h2>
                                            <img className="arrow" src={arrow} alt="arrow"/>
                                        </div>

                                        <div className="plasticTablewareCatalog__sort_filter-filters">
                                            <div>
                                                <input className="checkbox" type="checkbox"/>
                                                <span className="checkbox__title">Белый</span>
                                            </div>
                                            <div>
                                                <input className="checkbox" type="checkbox"/>
                                                <span className="checkbox__title">Прозрачный</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="plasticTablewareCatalog__catalog">
                            <h2 className="plasticTablewareCatalog__title">Наши товары</h2>
                            <div className="plasticTablewareCatalog__list">
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер
                                        «Супница»</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">500 мл</p>
                                    <NavLink className="plasticTablewareCatalog__list_item-btn"
                                             to="/catalog/tableware/product">Заказать</NavLink>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее
                                    </div>
                                </div>
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер круглый</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">125 мл</p>
                                    <button className="plasticTablewareCatalog__list_item-btn">Заказать</button>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее</div>
                                </div>
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер с крышкой</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">50 мл</p>
                                    <button className="plasticTablewareCatalog__list_item-btn">Заказать</button>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее</div>
                                </div>
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер «Супница»</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">500 мл</p>
                                    <button className="plasticTablewareCatalog__list_item-btn">Заказать</button>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее</div>
                                </div>
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер круглый</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">125 мл</p>
                                    <button className="plasticTablewareCatalog__list_item-btn">Заказать</button>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее</div>
                                </div>
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер с крышкой</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">50 мл</p>
                                    <button className="plasticTablewareCatalog__list_item-btn">Заказать</button>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее</div>
                                </div>
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер «Супница»</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">500 мл</p>
                                    <button className="plasticTablewareCatalog__list_item-btn">Заказать</button>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее</div>
                                </div>
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер круглый</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">125 мл</p>
                                    <button className="plasticTablewareCatalog__list_item-btn">Заказать</button>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее</div>
                                </div>
                                <div className="plasticTablewareCatalog__list_item">
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
                                            <img src={Sousnica} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Containers222} alt="Supnica"/>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={Supnica} alt="Supnica"/>
                                        </SwiperSlide>
                                    </Swiper>
                                    <h4 className="plasticTablewareCatalog__list_item-title">Контейнер с крышкой</h4>
                                    <p className="plasticTablewareCatalog__list_item-subtitle">50 мл</p>
                                    <button className="plasticTablewareCatalog__list_item-btn">Заказать</button>
                                    <div className="plasticTablewareCatalog__list_item-more">Смотреть подробнее</div>
                                </div>
                            </div>
                            <div className="plasticTablewareCatalog__pages">
                                <button className="plasticTablewareCatalog__pages_btn active" type="button">1</button>
                                <button className="plasticTablewareCatalog__pages_btn" type="button">2</button>
                                <button className="plasticTablewareCatalog__pages_btn" type="button">3</button>
                                <button className="plasticTablewareCatalog__pages_btn" type="button">4</button>
                                <button className="plasticTablewareCatalog__pages_btn" type="button">5</button>
                            </div>
                        </div>
                    </div>
                    <p className="plasticTablewareCatalog__subtitle">Давно выяснено, что при оценке дизайна и композиции
                        читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более
                        или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в
                        абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь
                        ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в
                        качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает,
                        как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст
                        Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно
                        (например, юмористические варианты).</p>
                </div>
            </section>
        </main>
    );
};

export default PlasticTableware;