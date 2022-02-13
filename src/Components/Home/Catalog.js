import React from 'react';
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import CatalogContainer from './imgs/caontainercatalog.png';
import Tableware from './imgs/tableware.png';
import Snacks from './imgs/snacks.png';
import Ceiling from './imgs/ceiling.png';
import HardCeiling from './imgs/hardceiling.png';
import Window from './imgs/window.png';

const Catalog = () => {
    return (
        <section className="catalog">
               <div className="container">
                   <div className="tableware">
                       <div className="container">
                           <h2 className="catalog__title">Каталог посуды</h2>
                           <Swiper
                               slidesPerView={3}
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
                                   <div className="catalog__card">
                                       <img src={CatalogContainer} alt="CatalogContainer"/>
                                       <h3 className="catalog__card_title">Пластиковые контейнеры</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={Tableware} alt="Tableware"/>
                                       <h3 className="catalog__card_title">Одноразовая посуда</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={Snacks} alt="Snacks"/>
                                       <h3 className="catalog__card_title">Посуда для хранения</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={CatalogContainer} alt="CatalogContainer"/>
                                       <h3 className="catalog__card_title">Пластиковые контейнеры</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={Tableware} alt="Snacks"/>
                                       <h3 className="catalog__card_title">Посуда для хранения</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={Snacks} alt="Snacks"/>
                                       <h3 className="catalog__card_title">Посуда для хранения</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                           </Swiper>
                       </div>
                   </div>
                   <div className="accessories">
                       <div className="container">
                           <h2 className="catalog__title">Каталог комплектующих</h2>
                           <Swiper
                               slidesPerView={3}
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
                                   <div className="catalog__card">
                                       <img src={Ceiling} alt="Ceiling"/>
                                       <h3 className="catalog__card_title">Комплектующие для натяжных потолков</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={HardCeiling} alt="HardCeiling"/>
                                       <h3 className="catalog__card_title">Комплектующие для натяжных потолков</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={Window} alt="Window"/>
                                       <h3 className="catalog__card_title">Комплектующие для окон пвх</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={Ceiling} alt="Ceiling"/>
                                       <h3 className="catalog__card_title">Комплектующие для натяжных потолков</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={HardCeiling} alt="HardCeiling"/>
                                       <h3 className="catalog__card_title">Комплектующие для натяжных потолков</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                   <div className="catalog__card">
                                       <img src={Window} alt="Window"/>
                                       <h3 className="catalog__card_title">Комплектующие для окон пвх</h3>
                                       <button className="catalog__card_btn" type="button">Перейти в раздел</button>
                                   </div>
                               </SwiperSlide>
                           </Swiper>
                       </div>
                   </div>
               </div>
        </section>
    );
};

export default Catalog;