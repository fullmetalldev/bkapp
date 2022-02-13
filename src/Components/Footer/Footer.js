import React from 'react';
import Logo from './imgs/logo.svg';
import './footer.scss';
import Instagram from './imgs/instagram.png';
import Phone from './imgs/phone.png';
import Location from './imgs/location.png';


const Footer = () => {
    return (
        <>
        <section className="sectionBeforeFooter">
            <div className="headerContainer">
                <div className="sectionBeforeFooter__btnRow">
                    <button className="sectionBeforeFooter__button" type="button">Напишите нам</button>
                </div>
            </div>
        </section>

        <footer className="footer">

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
                        <a href="#test">Каталог комплектующих</a>
                        <a href="#test">Каталог посуды</a>
                        <a href="#test">Новости</a>
                        <a href="#test">Контакты</a>
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
                    <a href="#test">Производство изделий из пластмассы</a>
                    <div className="footer__list_item">
                        <a href="#test"><img src={Instagram} alt="Instagram"/></a>
                        <a href="#test">Комплектующие</a>
                    </div>
                    <div className="footer__list_item">
                        <a href="#test"><img src={Instagram} alt="Instagram"/></a>
                        <a href="#test">Посуда</a>
                    </div>
                </div>
            </div>

        </footer>
        </>
    );
};

export default Footer;