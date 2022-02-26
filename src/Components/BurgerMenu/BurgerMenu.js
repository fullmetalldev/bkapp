import React from 'react';
import "./BurgerStyle.css"
import "./BurgerAdaptive.css";
import {NavLink} from "react-router-dom";

const BurgerMenu = ({form, setForm}) => {
    return (
        <div className="BurgerMain">
            <div className="BurgerMain__background">
                <div className="headerContainer">
                    <div className="BurgerMain__row">
                        <ul className="BurgerMain__row-column">
                            <NavLink to="/catalog/accessories" className="upper">Каталог комплектующих</NavLink>
                            <span className="BurgerMain__row-line"> </span>
                            <NavLink to="" className="lower">Комплектующие для стеклопакетов</NavLink>
                            <NavLink to="" className="lower">Комплектующие для москитных сеток</NavLink>
                            <NavLink to="" className="lower">Комплектующие для окон ПВХ</NavLink>
                            <NavLink to="" className="lower">Комплектующие для натяжных потолков</NavLink>
                            <NavLink to="/catalog/assecories/product" className="lower">Другие комплектующие</NavLink>
                        </ul>
                        <ul className="BurgerMain__row-column">
                            <NavLink to="/catalog/tableware" className="upper">Каталог посуды</NavLink>
                            <span className="BurgerMain__row-line"> </span>
                            <NavLink to="/catalog/tableware/product" className="lower">Пластиковые контейнеры</NavLink>
                            <NavLink to="" className="lower">Соусник одноразовый</NavLink>
                            <NavLink to="" className="lower">Столовые приборы</NavLink>
                            <NavLink to="" className="lower">Укупорка</NavLink>
                        </ul>
                        <ul className="BurgerMain__row-column">
                            <NavLink to="/about" className="upper">О компании</NavLink>
                            <span className="BurgerMain__row-line"> </span>
                            <NavLink to="/history" className="lower">История компании</NavLink>
                            <NavLink to="/team" className="lower">Наша команда</NavLink>
                            <NavLink to="/mission" className="lower">Миссия и ценности</NavLink>
                            <NavLink to="/benefits" className="lower">Наши преимущества</NavLink>
                            <NavLink to="/polypropylene" className="lower">Преимущества полипропилена</NavLink>
                            <NavLink to="" className="lower">Наши лицензии</NavLink>
                            <NavLink to="" className="lower">Наши награды</NavLink>
                            <NavLink to="/geography" className="lower">География продаж</NavLink>
                        </ul>
                        <ul className="BurgerMain__row-column">
                            <NavLink to="" className="upper">Назвать раздел</NavLink>
                            <span className="BurgerMain__row-line"> </span>
                            <NavLink to="/investors" className="lower">Инвесторам</NavLink>
                            <NavLink to="" className="lower">Поставщикам</NavLink>
                            <NavLink to="/production" className="lower">Контрактное производство</NavLink>
                            <NavLink to="" className="upper">Спец предложения</NavLink>
                            <NavLink to="" className="lower">Новости</NavLink>
                            <NavLink to="/delivery" className="lower">Оплата и доставка</NavLink>
                            <NavLink to="/vacancy" className="lower">Вакансии</NavLink>
                            <NavLink to="/contacts" className="lower">Контакты</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <a onClick={()=> setForm(!form)} className="BurgerMain__btn">Заказать образец</a>
        </div>
    );
};

export default BurgerMenu;