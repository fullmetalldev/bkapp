import React from 'react';
import ProjectImg from './imgs/prjectimg.png';

const Project = () => {
    return (
        <section className="project">
            <div className="container">
                <div className="project__row">
                    <div className="project__left">
                        <h2 className="project__title">Контрактное производство</h2>
                        <form className="project__form">
                            <div className="project__form_row">
                                <label>
                                    <input className="project__input" placeholder="Телефон" type="text"/>
                                </label>
                                <label>
                                    <input className="project__input" placeholder="Имя" type="text"/>
                                </label>
                                <button className="project__btn" type="submit">Обсудить проект</button>
                            </div>
                            <label className="project__checkbox">
                                <input type="checkbox"/>
                                <span>Ваши данные защищены и используются только для связи с вами</span>
                            </label>
                        </form>
                    </div>
                    <div className="project__right">
                        <img src={ProjectImg} alt="ProjectImg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;