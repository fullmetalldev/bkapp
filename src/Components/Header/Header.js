import React from 'react';
import "./headerStyles.css";
import tg from "./imgs/telegram.svg";
import call from "./imgs/call.svg";
import bag from "./imgs/bag.svg";
import logo from "./imgs/logo.svg";
import burger from "./imgs/burger.svg";
import search from "./imgs/search.svg";
import "./HeaderAdaptive.css";

const Header = ({cartScreen, setCartScreen, language, setLanguage, setBurgerMenu, burgerMenu}) => {
    const tegBody = document.querySelector("body");
    const noScroll = () => {
        tegBody.style.overflow = "hidden"
    };

    return (
        <header className="header">

            <section className="header__up">
                <div className="headerContainer">
                    <nav className="header__up-navbar">
                        <h3 className="header__up-title">Производство изделий из пластмассы</h3>
                        <ul className="header__up-right">
                            <li className="header__up-right_telegram">
                                <img src={tg} alt="tg"/>
                                <a href="">Напишите нам</a>
                            </li>
                            <li className="header__up-right_call">
                                <img src={call} alt="call"/>
                                <a href="tel:+73833777732">+ 7 (383)-377-77-32</a>
                            </li>
                            <li className="header__up-right_btn">
                                <button className="header__up-right_button">Заказать звонок</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section className="header__down">
                <div className="headerContainer">
                    <nav className="header__down-navbar">
                        <div className="header__down-left">
                            <img className="header__down-BurgerButton" onClick={() => setBurgerMenu(!burgerMenu)}
                                 src={burger} alt="burger button"/>
                            <a href="/">
                                <img className="header__down-LogoType" src={logo} alt="website logo"/>
                            </a>

                        </div>
                        <div className="header__down-right">
                            <div className="header__down-search">
                                <input type="text" placeholder="Введите" className="header__down-search-inp"/>
                                <img src={search} className="header__down-search-svg" alt="search icon"/>
                                <h2 className="header__down-search-title">Поиск</h2>
                            </div>
                            <div className="header__down-language">
                                <span
                                    className={language === 'ru' ? "header__down-language_ru activeLang" : "header__down-language_ru"}>RU</span>
                                <input className="header__down-language-checkbox" type="checkbox"
                                       onChange={(e) => e.target.checked ? setLanguage('eng') : setLanguage('ru')}/>
                                <span
                                    className={language === 'eng' ? "header__down-language_eng activeLang" : "header__down-language_eng"}>EN</span>
                            </div>
                            <div className="header__down-cart" onClick={() => {
                                setCartScreen(!cartScreen);
                                noScroll()
                            }}>
                                <img src={bag} className="header__down-search-svg" alt="search icon"/>
                                <h2 className="header__down-search-title">Корзина</h2>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </header>
    );
};

export default Header;