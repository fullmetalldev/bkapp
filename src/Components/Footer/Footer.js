import React from 'react';
import "./footerStyle.css"

const Footer = () => {
    return (
        <footer className="footer">
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

        </footer>
    );
};

export default Footer;