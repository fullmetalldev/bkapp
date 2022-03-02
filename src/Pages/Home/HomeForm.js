import React from 'react';
import ProjectImg from '../Home/imgs/prjectimg.png';

const HomeForm = () => {
    return (
        <section className="homeForm">
            <div className="container">
                <div className="homeForm__box">
                    <div className="homeForm__content">
                        <h2 className="homeForm__title">Контрактное производство</h2>
                        <form>
                            <label className="ForminputsAndBtn">
                                <input className="homeForm__input" placeholder="Телефон" type="text"/>
                                <input className="homeForm__input" placeholder="Имя" type="text"/>
                                <button className="homeForm__btn" type="submit">Обсудить проект</button>
                            </label>
                            <div className="homeForm__checkbox box">
                                <label className="control control--checkbox">
                                    <input type="checkbox" disabled="disabled" checked="checked"/>
                                    <div className="control__indicator"></div>
                                </label>
                                <p>Ваши данные защищены и используются только для связи с вами</p>
                            </div>
                        </form>
                    </div>
                    <img src={ProjectImg} alt="Form"/>
                </div>
            </div>
        </section>
    );
};

export default HomeForm;