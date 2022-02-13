import React from 'react';
import "./catalog.css";
import comp1 from "./imgs/complect1.png";
import comp2 from "./imgs/complect2.png";
import comp3 from "./imgs/complect3.png";

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

                    <div className="sectionCatalog__buttonsRow">
                        <a className="sectionCatalog__buttonsRow-transperentBtn">
                            Скачать каталог
                        </a>
                        <button className="sectionCatalog__buttonsRow-greenBtn">
                            Запросить прайс лист
                        </button>
                    </div>

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
                </section>

            </div>

        </main>
    );
};

export default CatalogSection;