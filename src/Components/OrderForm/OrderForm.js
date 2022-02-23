import React from 'react';
import back from "../../Pages/Catalog/imgs/BackGroundForm.png";

const OrderForm = () => {
    return (
        <div className="container">
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
        </div>
    );
};

export default OrderForm;