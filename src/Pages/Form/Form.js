import React from 'react';
import "./FormStyles.css";

const Form = () => {
    return (
        <div className="formBack">

            <div className="formBack-layer">

            </div>

            <form className="form">

                <h2>Напишите нам</h2>

                <input className="form_inp" type="number" placeholder="Телефон"/>
                <input className="form_inp" type="text" placeholder="Имя"/>

                <div className="checkbox">
                    <input type="checkbox"/>
                    <span>Ваши данные защищены и используются только для <br/> связи с вами</span>
                </div>

                <button className="form_button">Отправить</button>

            </form>

        </div>
    );
};

export default Form;