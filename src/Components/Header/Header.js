import React from 'react';
import "./headerStyles.css";
import tg from "./imgs/telegram.svg";
import call from "./imgs/call.svg";
import bag from "./imgs/bag.svg";

const Header = () => {
    return (
        <header className="header">
            <section className="header__up">
                <div className="headerContainer">
                    <nav className="header__up-navbar">
                        <h3 className="header__up-title">Производство изделий из пластмассы</h3>
                        <ul className="header__up-right">
                            <li className="header__up-right_telegram">
                                <img src={tg} alt="tg"/>
                                <span>Напишите нам</span>
                            </li>
                            <li className="header__up-right_call">
                                <img src={call} alt="call"/>
                                <span>+ 7 (383)-377-77-32</span>
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

                </div>
            </section>
        </header>
    );
};

export default Header;