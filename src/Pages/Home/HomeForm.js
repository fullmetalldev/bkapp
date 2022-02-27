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
                            <label>
                                <input className="homeForm__input" placeholder="Телефон" type="text"/>
                            </label>
                            <label className="margin-form">
                                <input className="homeForm__input" placeholder="Имя" type="text"/>
                            </label>
                            <button className="homeForm__btn" type="submit">Обсудить проект</button>
                            <label className="homeForm__checkbox">
                                <input type="checkbox" checked/>
                                <p>Ваши данные защищены и используются только для связи с вами</p>
                            </label>
                        </form>
                    </div>
                    <img src={ProjectImg} alt="Form"/>
                </div>
            </div>
        </section>
    );
};

export default HomeForm;