import React from 'react';
import './assecoriesProduct.scss';
import ProductImg from "../PlasticTablewareProduct/img/containerImg.png";
import "@fancyapps/ui/dist/fancybox.css";
import {Fancybox} from "@fancyapps/ui";
import Item1 from "../PlasticTablewareProduct/img/item1.png";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import potolok from "./potolok.png"

const AssecoriesProduct = () => {
    return (
        <section className="assecoriesProduct">
            <div className="container">
                <p className="section__navi"><a className="navLink" href="/">Главная</a> / <a className="navLink" href="/catalog/accessories">Каталог комплектующих</a> / <a className="navLink" href="/catalog/assecories/product">Комплектующие для натяжных потолков</a> / Клин монтажный, разрезной</p>
                <h1 className="section__title">Клин монтажный, разрезной (168х37х22)</h1>
                <p className="tablewareProduct__subtitle">Используем современные безопасные материалы и добавки,
                    высокотехнологичное оборудование для создания уникальных свойств изделий.
                </p>
                <div className="assecoriesProduct__top">
                    <h2>Каталог комплектующих</h2>
                    <div className="buttonsRow">
                        <a href="#test" className="buttonsRow-transperentBtn more__hover">Скачать каталог</a>
                        <button className="buttonsRow-greenBtn">Запросить прайс лист</button>
                    </div>
                </div>
                <div className="assecoriesProduct__row">
                    <div className="assecoriesProduct__sort">
                        <div className="assecoriesProduct__sort_top">
                            <p className="active btn-hover-blue-light">Комплектующие для москитных сеток</p>
                            <p className=" btn-hover-blue-light">Комплектующие для москитных сеток</p>
                            <p className=" btn-hover-blue-light">Комплектующие для стеклопакетов</p>
                            <p className=" btn-hover-blue-light">Комплектующие для окон ПВХ</p>
                            <p className=" btn-hover-blue-light">Другие комплектующие</p>
                        </div>
                        <div className="assecoriesProduct__sort_bot">
                            <h3>Заказать образец</h3>
                            <form className="assecoriesProduct__sort_bot-form">
                                <label>
                                    <input placeholder="Ваше имя" type="text"/>
                                </label>
                                <label>
                                    <input placeholder="Ваш телефон" type="text"/>
                                </label>
                                <label>
                                    <input placeholder="Ваш e-mail" type="email"/>
                                </label>
                                <button>Отправить</button>
                            </form>
                        </div>
                    </div>
                    <div className="tablewareProduct__gallery">
                        <div className="tablewareProduct__gallery_main">
                            <a
                                data-fancybox="gallery"
                                data-src="https://lipsum.app/id/2/1024x768"
                            >
                                <img src={potolok}/>
                            </a>
                        </div>
                        <div className="tablewareProduct__gallery_row">
                            <div className="tablewareProduct__gallery_card">
                                <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
                                    <img src="https://lipsum.app/id/3/200x150"/>
                                </a>
                            </div>
                            <div className="tablewareProduct__gallery_card">
                                <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
                                    <img src="https://lipsum.app/id/3/200x150"/>
                                </a>
                            </div>
                            <div className="tablewareProduct__gallery_card">
                                <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
                                    <img src="https://lipsum.app/id/3/200x150"/>
                                </a>
                            </div>
                            <div className="tablewareProduct__gallery_card">
                                <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
                                    <img src="https://lipsum.app/id/3/200x150"/>
                                </a>
                            </div>
                        </div>
                        <p className="tablewareProduct__gallery_descr">
                            Завод БК производит контейнер Плошка объемом 360 мл. Диаметр Плошки 112 мм.
                            <br/><br/>
                            Контейнер Плошка 360 мл - один из самых востребованных объемов пластиковых одноразовых
                            контейнеров и одноразовой пластиковой посуды. Он достаточно универсален и используется для
                            самых различных целей.
                        </p>
                    </div>
                    <div className="assecoriesProduct__char">
                        <div className="assecoriesProduct__right">
                            <ul className="assecoriesProduct__right_list">
                                <li>Диаметр</li>
                                <li>Материал</li>
                                <li>Цвет</li>
                                <li>Ед. изм.</li>
                                <li>Норма упаковки</li>
                                <li>Вес 1й коробки, кг</li>
                                <li>Объем 1й коробки, м3</li>
                            </ul>
                            <ul className="assecoriesProduct__right_stats">
                                <li className="btn-hover">22 мм</li>
                                <li className="btn-hover">ПНД</li>
                                <li className="btn-hover">В ассортименте</li>
                                <li className="btn-hover">шт.</li>
                                <li className="btn-hover">2000</li>
                                <li className="btn-hover">8,8 кг</li>
                                <li className="btn-hover">0,06 м3</li>
                            </ul>
                        </div>
                        <button className="assecoriesProduct__right_btn" type="button">Заказать товар</button>
                    </div>
                </div>
                <div className="tablewareProduct__cards">
                    <div className="tablewareProduct__cards_card">
                        <h2 className="tablewareProduct__cards_title">Ранее вы смотрели</h2>
                        <Swiper
                            slidesPerView={4}
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
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Крепление верх-низ</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <h3>Крепление верх-низ</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <h3>Крепление верх-низ</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <h3>Крепление верх-низ</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <h3>Крепление верх-низ</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <h3>Крепление верх-низ</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <h3>Крепление верх-низ</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <h3>Крепление верх-низ</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="tablewareProduct__cards_card margin">
                        <h2 className="tablewareProduct__cards_title">С этим товаром покупают</h2>
                        <Swiper
                            slidesPerView={4}
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
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Мост Винтек 532</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Мост Винтек 532</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Мост Винтек 532</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Мост Винтек 532</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Мост Винтек 532</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Мост Винтек 532</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Мост Винтек 532</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tablewareProduct__cards_item">
                                    <div className="tablewareProduct__cards_item-img">
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
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={Item1} alt="Item1"/>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <h3>Мост Винтек 532</h3>
                                    <p>360 мл</p>
                                    <button>Заказать</button>
                                    <a href="#" className="more__hover">Смотреть подробнее</a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssecoriesProduct;