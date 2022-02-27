import React from 'react';
import "./contractProduction.css";
import image from "./imgs/img.png";
import order from "./imgs/orderRight.png";
import "./ContractProdAdaptive.css";

const ContractProduction = () => {
    return (
        <div className="contractProduction">

            <div className="container">

                <div className="contractProduction__row">

                    <h4 className="contractProduction__route"><a className="navLink" href="/">Главная</a> / Контрактное производство</h4>

                    <h2 className="section__title">Контрактное производство</h2>

                    <div className="contractProduction__twoBlocks">
                        <div className="contractProduction__twoBlocks-left">С 2014 года компания ООО «БК» размещает на
                            своем оборудовании пресс-формы сторонних клиентов, оказывая услуги по производству продукции
                            клиента на наших мощностях. Готовы рассмотреть размещение ваших пресс-форм на нашей
                            производственной площадке.
                        </div>
                        <div className="contractProduction__twoBlocks-right">
                            <img src={image} alt="card image"/>
                        </div>
                    </div>

                    <form className="contractProduction__orderForm">
                        <div className="contractProduction__orderForm_left">
                            <h2>Заказать</h2>
                            <h4>Оставьте заявку в форме ниже,
                                специалист перезвонит вам
                                в течение рабочего дня</h4>
                            <label className="contractProduction__orderForm_inputs">
                                <input placeholder="Ваше имя" type="text" required/>
                                <input placeholder="Ваш телефон" type="number" required/>
                                <button className="button">
                                    Отправить
                                </button>
                            </label>
                            <div className="contractProduction__orderForm_checkbox">
                                <input type="checkbox" checked/>
                                <span>Ваши данные защищены и используются только для связи с вами</span>
                            </div>
                        </div>
                        <div className="contractProduction__orderForm_img">
                            <img src={order} alt="order right"/>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    );
};

export default ContractProduction;