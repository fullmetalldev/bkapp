import React from 'react';
import "./CartScreen.css";
import card from "./cardImg.png";

const CartScreen = ({setCartScreen}) => {
    return (
        <>
            <div onClick={() => setCartScreen(false)} className="cartBack">
            </div>

            <div className="cartScreen">
                <div className="cartScreen__closeAndTitleRow">
                    <h2 className="cartScreen-title">Корзина</h2>
                    <svg onClick={() => setCartScreen(false)} className="cartScreen-close" width="20" height="20"
                         viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.6343 0.365717C19.4001 0.131523 19.0824 0 18.7513 0C18.4201 0 18.1024 0.131523 17.8682 0.365717L10.0079 8.22606L2.14753 0.365717C1.83032 0.0591721 1.37488 -0.0570841 0.94958 0.0593812C0.524059 0.176061 0.191808 0.508321 0.0751127 0.933847C-0.0413579 1.35916 0.0749037 1.81458 0.381449 2.13179L8.2418 9.99214L0.381449 17.8525C0.140355 18.0852 0.00297578 18.4051 4.76926e-05 18.7401C-0.0028797 19.0751 0.129066 19.3973 0.365765 19.6342C0.602678 19.8709 0.924886 20.0029 1.25988 20C1.59486 19.997 1.91476 19.8596 2.14751 19.6185L10.0079 11.7582L17.8682 19.6185C18.1854 19.9251 18.6409 20.0414 19.0662 19.9249C19.4917 19.8082 19.8239 19.4759 19.9406 19.0504C20.0571 18.6251 19.9408 18.1697 19.6343 17.8525L11.7739 9.99213L19.6343 2.13178C19.8685 1.89759 20 1.57994 20 1.24875C20 0.917558 19.8685 0.599911 19.6343 0.365717Z"
                            fill="#9D8675"/>
                    </svg>
                </div>
                <div className="cartScreen__itemsRow">
                    <div className="cartScreen__item">
                        <img alt="card img"/>
                        <div className="cartScreen__item-priceAndName">
                            <h4 className="cartScreen__item-name">
                                Контейнер “Плошка”, 360мл
                            </h4>
                            <span className="cartScreen__item-price">
470 руб.
                            </span>
                        </div>

                        <div className="cartScreen__item-number">
                            <h4 className="cartScreen__item-numberInfo">
                                Количество:
                            </h4>
                            <div className="cartScreen__item-function">
                                <button className="cartScreen__item-function_plus">+</button>
                                <span className="cartScreen__item-function-info">
1
                                </span>
                                <button className="cartScreen__item-function_minus">-</button>
                            </div>
                        </div>

                        <div className="cartScreen__item-priceSumm">
                            <h4 className="cartScreen__item-summInfo">
                                Сумма:
                            </h4>
                            <span className="cartScreen__item-price">
470 руб.
                            </span>
                        </div>

                        <div className="cartScreen__item-remove">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6343 0.365717C19.4001 0.131523 19.0824 0 18.7513 0C18.4201 0 18.1024 0.131523 17.8682 0.365717L10.0079 8.22606L2.14753 0.365717C1.83032 0.0591721 1.37488 -0.0570841 0.94958 0.0593812C0.524059 0.176061 0.191808 0.508321 0.0751127 0.933847C-0.0413579 1.35916 0.0749037 1.81458 0.381449 2.13179L8.2418 9.99214L0.381449 17.8525C0.140355 18.0852 0.00297578 18.4051 4.76926e-05 18.7401C-0.0028797 19.0751 0.129066 19.3973 0.365765 19.6342C0.602678 19.8709 0.924886 20.0029 1.25988 20C1.59486 19.997 1.91476 19.8596 2.14751 19.6185L10.0079 11.7582L17.8682 19.6185C18.1854 19.9251 18.6409 20.0414 19.0662 19.9249C19.4917 19.8082 19.8239 19.4759 19.9406 19.0504C20.0571 18.6251 19.9408 18.1697 19.6343 17.8525L11.7739 9.99213L19.6343 2.13178C19.8685 1.89759 20 1.57994 20 1.24875C20 0.917558 19.8685 0.599911 19.6343 0.365717Z" fill="#9D8675"/>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default CartScreen;