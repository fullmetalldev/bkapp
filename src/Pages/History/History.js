import React from 'react';
import "./historyStyle.css";
import img from "./imgs/card1.png"
import img2 from "./imgs/card2.png"
import img3 from "./imgs/card3.png"
import Order from "../../Components/Details/Order/Order";
import Bag from "../../Components/Details/Bag/Bag";
import "./HistoryAdaptive.css";

const History = () => {
    return (
        <main className="history">
            <div className="container">
                <div className="history__main">
                    <h3 className="history__main-title">Главная / История компании</h3>
                    <h3 className="history__main-titleHistory">История компании</h3>
                    <section className="history__main-block">
                        <div className="history__main-block_left">
                            <div className="history__main-block_titleBlock">
                                <h2 className="history__main-block_titleBlock-title">2021</h2>
                                <span className="history__main-block_titleBlock-info">Приобретение и запуск новой линии по упаковке столовых приборов в наборы.
                                Расширение ассортимента столовых приборов и одноразовой посуды.
                                </span>
                            </div>
                            <div className="history__main-block_titleBlock">
                                <h2 className="history__main-block_titleBlock-title">2020</h2>
                                <span className="history__main-block_titleBlock-info">Расширение ассортимента столовых приборов и одноразовой посуды.</span>
                            </div>
                            <div className="history__main-block_titleBlock">
                                <h2 className="history__main-block_titleBlock-title">2019</h2>
                                <span className="history__main-block_titleBlock-info">Создание портального фрезерного обрабатывающего центра. Ремонт и самостоятельное изготовление новых пресс-форм для увеличения ассортимента</span>
                            </div>
                            <div className="history__main-block_titleBlock">
                                <h2 className="history__main-block_titleBlock-title">2018</h2>
                                <span className="history__main-block_titleBlock-info">Приобретение дополнительного робота–манипулятора, термопластавтомата для увеличение выпуска продукции</span>
                            </div>
                        </div>
                        <div className="history__main-block_right">
                            <img className="history__main-block_right-img" src={img} alt="image1"/>
                        </div>
                    </section>

                    <section className="history__main-block history__main-block2">
                        <div className="history__main-block_right">
                            <img className="history__main-block_right-img" src={img2} alt="image2"/>
                        </div>
                        <div className="history__main-block_left">
                            <div className="history__main-block_titleBlock">
                                <h2 className="history__main-block_titleBlock-title">2017</h2>
                                <span className="history__main-block_titleBlock-info">Приобретение робота–манипулятора для увеличения выпуска продукции.
 Внедрение системы качества выпускаемой продукции.
Покупка сверлильного фрезерного станка для самостоятельного обслуживания ТПА.</span>
                            </div>
                            <div className="history__main-block_titleBlock">
                                <h2 className="history__main-block_titleBlock-title">2016</h2>
                                <span className="history__main-block_titleBlock-info">Увеличение продаж соусника до максимальной производительности</span>
                            </div>
                            <div className="history__main-block_titleBlock">
                                <h2 className="history__main-block_titleBlock-title">2015</h2>
                                <span className="history__main-block_titleBlock-info">Расширение нового направление Пищевая упаковка - покупка пресс- формы соусник.
Привлечение 32 пресс-форм на аутсорсинг.
Покупка новых двух термопластавтоматов и доведение общего количества до 14 шт.
Покупка ЧПУ станков для точной металлообработки в механическом цехе.</span>
                            </div>
                            <div className="history__main-block_titleBlock">
                                <h2 className="history__main-block_titleBlock-title">2014</h2>
                                <span className="history__main-block_titleBlock-info">Приобретение трех термопластавтоматов и доведение их общего количества до 12 шт.
Привлечение 15 пресс-форм на аутсорсинг Увеличение ассортимента товара.
Приобретение станков по металлообработки  и открытие механического цеха для обслуживания и ремонта огромного количества пресс-форм на предприятии</span>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="history__main-block">
                    <div className="history__main-block_left">
                        <div className="history__main-block_titleBlock">
                            <h2 className="history__main-block_titleBlock-title">2013</h2>
                            <span className="history__main-block_titleBlock-info">Покупка нового производственного оборудования и утилизация старого</span>
                        </div>
                        <div className="history__main-block_titleBlock">
                            <h2 className="history__main-block_titleBlock-title">2012</h2>
                            <span
                                className="history__main-block_titleBlock-info">Увеличение ассортимента продукции.</span>
                        </div>
                        <div className="history__main-block_titleBlock">
                            <h2 className="history__main-block_titleBlock-title">2011</h2>
                            <span className="history__main-block_titleBlock-info">Создание  компании ООО «БК».
Покупка нового оборудования и увеличение производственных мощностей
</span>
                        </div>
                        <div className="history__main-block_titleBlock">
                            <h2 className="history__main-block_titleBlock-title">2010</h2>
                            <span className="history__main-block_titleBlock-info">Обустройство предприятия с  расширением площадей под производство.</span>
                        </div>
                    </div>
                    <div className="history__main-block_right">
                        <img className="history__main-block_right-img" src={img3} alt="image3"/>
                    </div>
                </section>

            </div>
            <div className="history__button">
                <Order/>
            </div>
            <div className="history__bag">
                <Bag/>
            </div>
        </main>
    );
};

export default History;