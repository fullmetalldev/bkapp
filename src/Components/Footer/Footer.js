import React from 'react';
<<<<<<< HEAD
import "./footerStyle.css"
=======
import Logo from './imgs/logo.svg';
import './footer.scss';
import Instagram from './imgs/instagram.png';
import Phone from './imgs/phone.png';
import Location from './imgs/location.png';
>>>>>>> 1f403e257be8db201e580a65d610f7bdaff088a6

const Footer = () => {
    return (
        <footer className="footer">
<<<<<<< HEAD
            <div className="container">
                <section className="footer__row">

                        <div className="footer__up">
                            <div className="footer__up-left">
                                <span className="footer__up-left_title">Если у вас есть предложения по нашему сервису, вы можете:</span>
                                <button className="footer__up-left_btn">Написать директору</button>
                            </div>
                            <div className="footer__up-right">
                                <span className="footer__up-right_title">Хотите быть в курсе наших новинок, то подпишитесь на наши обновления:</span>
                            <form className="footer__up-right_down">
                                <input className="footer__up-right_down-input" type="email" placeholder="Электронная почта"/>
                                <button className="footer__up-right_down-button">Подписаться</button>
                            </form>
                            </div>
                        </div>

                        <div className="footer__middle">

                        </div>

                        <div className="footer__down">

                        </div>

                </section>
            </div>

=======
            <div className="headerContainer">
                <div className="footer__row">
                    <div className="footer__left">
                        <p className="footer__descr">Если у вас есть предложения по нашему сервису, вы можете:</p>
                        <button className="footer__btn" type="button">Написать директору</button>
                    </div>
                    <div className="footer__right">
                        <p className="footer__descr">Хотите быть в курсе наших новинок, то подпишитесь на наши
                            обновления:</p>
                        <form className="footer__form">
                            <label>
                                <input placeholder="Электронная почта" type="email" className="footer__input"/>
                            </label>
                            <button className="footer__form_btn" type="submit">Подписаться</button>
                        </form>
                    </div>
                </div>
                <div className="footer__bot">
                    <img src={Logo} alt="Logo"/>
                    <div className="footer__bot_left">
                        <a href="#">Каталог комплектующих</a>
                        <a href="#">Каталог посуды</a>
                        <a href="#">Новости</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div className="footer__bot_right">
                        <div className="footer__bot_right-row">
                            <img src={Location} alt="Location"/>
                            <p>г. Новосибирск, ул.2-я Станционная, 30а, корпус 1</p>
                        </div>
                        <div className="footer__bot_right-row">
                            <img src={Phone} alt="Phone"/>
                            <a href="tel:+73833777732">+ 7 (383)-377-77-32</a>
                        </div>
                        <p className="footer__contacts_call">Заказать звонок</p>
                    </div>
                </div>
                <div className="footer__list">
                    <a href="#">Производство изделий из пластмассы</a>
                    <div className="footer__list_item">
                        <a href="#"><img src={Instagram} alt="Instagram"/></a>
                        <a href="#">Комплектующие</a>
                    </div>
                    <div className="footer__list_item">
                        <a href="#"><img src={Instagram} alt="Instagram"/></a>
                        <a href="#">Посуда</a>
                    </div>
                </div>
            </div>
>>>>>>> 1f403e257be8db201e580a65d610f7bdaff088a6
        </footer>
    );
};

export default Footer;