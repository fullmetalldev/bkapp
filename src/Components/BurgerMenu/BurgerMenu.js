import React from 'react';
import "./BurgerStyle.css"
import "./BurgerAdaptive.css";

const BurgerMenu = ({form, setForm}) => {
    return (
        <div className="BurgerMain">
            <div className="BurgerMain__background">
                <div className="headerContainer">
                    <div className="BurgerMain__row">
                        <ul className="BurgerMain__row-column">
                            <a href="/catalog/accessories" className="upper">Каталог комплектующих</a>
                            <span className="BurgerMain__row-line"> </span>
                            <a className="lower">Комплектующие для стеклопакетов</a>
                            <a className="lower">Комплектующие для москитных сеток</a>
                            <a className="lower">Комплектующие для окон ПВХ</a>
                            <a  href="/catalog/assecories/product" className="lower">Комплектующие для натяжных потолков</a>
                            <a className="lower">Другие комплектующие</a>
                        </ul>
                        <ul className="BurgerMain__row-column">
                            <a href="/catalog/tableware" className="upper">Каталог посуды</a>
                            <span className="BurgerMain__row-line"> </span>
                            <a href="/catalog/tableware/product" className="lower">Пластиковые контейнеры</a>
                            <a className="lower">Соусник одноразовый</a>
                            <a className="lower">Столовые приборы</a>
                            <a className="lower">Укупорка</a>
                        </ul>
                        <ul className="BurgerMain__row-column">
                            <a href="/about" className="upper">О компании</a>
                            <span className="BurgerMain__row-line"> </span>
                            <a href="/history" className="lower">История компании</a>
                            <a href="/team" className="lower">Наша команда</a>
                            <a href="/mission" className="lower">Миссия и ценности</a>
                            <a href="/benefits" className="lower">Наши преимущества</a>
                            <a href="/polypropylene" className="lower">Преимущества полипропилена</a>
                            <a className="lower">Наши лицензии</a>
                            <a className="lower">Наши награды</a>
                            <a href="/geography" className="lower">География продаж</a>
                        </ul>
                        <ul className="BurgerMain__row-column">
                            <a className="upper">Назвать раздел</a>
                            <span className="BurgerMain__row-line"> </span>
                            <a href="/investors" className="lower">Инвесторам</a>
                            <a className="lower">Поставщикам</a>
                            <a href="/production" className="lower">Контрактное производство</a>
                            <a className="upper">Спец предложения</a>
                            <a className="lower">Новости</a>
                            <a href="/delivery" className="lower">Оплата и доставка</a>
                            <a href="/vacancy" className="lower">Вакансии</a>
                            <a href="/contacts" className="lower">Контакты</a>
                        </ul>
                    </div>
                </div>
            </div>
            <a onClick={()=> setForm(!form)} className="BurgerMain__btn">Заказать образец</a>
        </div>
    );
};

export default BurgerMenu;