import React from 'react';
import "./catalog.css";
import comp1 from "./imgs/complect1.png";
import comp2 from "./imgs/complect2.png";
import comp3 from "./imgs/complect3.png";
import bfrPrd1 from "./imgs/beforePrd2.png";
import bfrPrd2 from "./imgs/beforePrd1.png";
import back from "./imgs/BackGroundForm.png";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import CatalogBtns from "../../Components/CatalogBtns/CatalogBtns";

const CatalogSection = () => {


    return (
        <main className="sectionCatalog">

            <div className="container">

                <section className="sectionCatalog__row">

                    <h2 className="sectionCatalog__whichSection">Главная / Каталог комплектующих</h2>
                    <h2 className="sectionCatalog__title">Каталог комплектующих</h2>
                    <h4 className="sectionCatalog__info">Используем современные безопасные материалы и добавки,
                        высокотехнологичное оборудование для создания уникальных свойств изделий.
                    </h4>

                    <CatalogBtns/>

                    <div className="sectionCatalog__complectsRow">
                        <div className="sectionCatalog__complectsRow-card">
                            <img className="sectionCatalog__complectsRow-card_img" src={comp1} alt="complect1"/>
                            <h2 className="sectionCatalog__complectsRow-card_title">
                                Комплектующие<br/>
                                для москитных сеток
                            </h2>
                        </div>

                        <div className="sectionCatalog__complectsRow-card">
                            <img className="sectionCatalog__complectsRow-card_img" src={comp2} alt="complect1"/>
                            <h2 className="sectionCatalog__complectsRow-card_title">
                                Комплектующие<br/>
                                для стеклопакетов
                            </h2>
                        </div>

                        <div className="sectionCatalog__complectsRow-card">
                            <img className="sectionCatalog__complectsRow-card_img" src={comp3} alt="complect1"/>
                            <h2 className="sectionCatalog__complectsRow-card_title">
                                Другие<br/>
                                комплектующие
                            </h2>
                        </div>
                    </div>

                    <div className="sectionCatalog__beforeProductsRow">

                        <div className="sectionCatalog__beforeProductsRow-card">
                            <h2 className="sectionCatalog__beforeProductsRow-card_title">Комплектующие для окон ПВХ</h2>
                            <div className="sectionCatalog__beforeProductsRow-card_ul">
                                <div className="sectionCatalog__beforeProductsRow-card_left">
                                    <span>Фальцевые вкладыши</span>
                                    <span>Заглушки для подоконника</span>
                                    <span>Крепления для подоконника</span>
                                </div>
                                <div className="sectionCatalog__beforeProductsRow-card_right">
                                    <span
                                        className="sectionCatalog__beforeProductsRow-card_red">Дренажные колпачки</span>
                                    <span>Ручки балконные</span>
                                </div>
                            </div>
                            <img src={bfrPrd1} alt="beforeCard1"/>

                        </div>
                        <div className="sectionCatalog__beforeProductsRow-card">
                            <h2 className="sectionCatalog__beforeProductsRow-card_title">Комплектующие для натяжных
                                потолков
                            </h2>
                            <div className="sectionCatalog__beforeProductsRow-card_ul">
                                <div className="sectionCatalog__beforeProductsRow-card_left">
                                    <span>Установочные кольца</span>
                                    <span>Протекторные кольца</span>
                                </div>
                            </div>
                            <img src={bfrPrd2} alt="beforeCard2"/>

                        </div>

                    </div>

                    <CatalogProducts/>

                    <form className="sectionCatalog__form">

                        <div className="sectionCatalog__form-left">
                            <h2 className="sectionCatalog__form-title">
                                Заказать образец
                            </h2>
                            <label className="sectionCatalog__form-label">
                                <input placeholder="Ваше имя" type="text" required/>
                                <input placeholder="Ваш телефон" type="number" required/>
                                <input placeholder="Ваш e-mail" type="email" required/>
                            </label>
                            <div className="sectionCatalog__form-btnAndInfo">
                                <div className="infoAndCheckbox">
                                    <input className="infoAndCheckbox_checkbox" type="checkbox"/>
                                    <h4 className="infoAndCheckbox_title">Ваши данные защищены и используются
                                        только <br/> для связи с вами</h4>
                                </div>
                                <button className="sectionCatalog__form-btnAndInfo_button">Отправить</button>
                            </div>
                        </div>

                        <div className="sectionCatalog__form-right">
                            <img className="sectionCatalog__form-img" src={back} alt="back"/>
                        </div>

                    </form>

                    <span className="sectionCatalog__infoTitle">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
</span>

                </section>

            </div>

        </main>
    );
};

export default CatalogSection;