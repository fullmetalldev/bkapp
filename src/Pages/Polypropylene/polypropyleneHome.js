import React from 'react';
import WorkTemp from './img/worktemp.png';
import Price from './img/pricepng.png';
import Ecology from './img/egologypng.png';
import Weight from './img/weightpng.png';
import Reuse from './img/reuse.png';
import Socar from './img/socar.png';
import Quotes from './img/quotes.png';
import Fork from './img/fork.png';

const PolypropyleneHome = () => {
    return (
        <section className="polypropyleneHome">
            <img className="polypropyleneHome__img" src={Fork} alt="Fork"/>
            <div className="container">
                <p className="section__navi"><a className="navLink" href="/">Главная</a> / Преимущества полипропилена</p>
                <h1 className="section__title">Преимущества полипропилена</h1>
                <p className="polypropyleneHome__comment">В сравнении с полистиролом</p>
                <div className="polypropyleneHome__row">
                    <div className="work__card">
                        <div className="work__card_img">
                            <img src={WorkTemp} alt="WorkTemp"/>
                        </div>
                        <div className="work__card_content">
                            <h3 className="work__card_title">Рабочая температура</h3>
                            <p className="work__card_subtitle">Температура использования полипропилена - до 120°C, а
                                полистирола лишь до 70°С.</p>
                        </div>
                    </div>
                    <div className="work__card">
                        <div className="work__card_img">
                            <img src={Price} alt="Price"/>
                        </div>
                        <div className="work__card_content">
                            <h3 className="work__card_title">Стоимость</h3>
                            <p className="work__card_subtitle">Стоимость приборов из полипропилена выходит ниже для
                                покупателя за счет меньших затрат на производство и переработку.</p>
                        </div>
                    </div>
                    <div className="work__card">
                        <div className="work__card_img">
                            <img src={Ecology} alt="Ecology"/>
                        </div>
                        <div className="work__card_content">
                            <h3 className="work__card_title">Экологичность</h3>
                            <p className="work__card_subtitle">Полипропилен не токсичен, безопасен для требовательных
                                продуктов питания и применяется даже в медицине.</p>
                        </div>
                    </div>
                    <div className="work__card">
                        <div className="work__card_img">
                            <img src={Weight} alt="Weight"/>
                        </div>
                        <div className="work__card_content">
                            <h3 className="work__card_title">Легкий вес</h3>
                            <p className="work__card_subtitle">Приборы из полипропилена легчче аналогов из
                                полистирола.</p>
                        </div>
                    </div>
                    <div className="work__card">
                        <div className="work__card_img">
                            <img src={Reuse} alt="Reuse"/>
                        </div>
                        <div className="work__card_content">
                            <h3 className="work__card_title">Повторное использование</h3>
                            <p className="work__card_subtitle">Полипропилен можно использовать многократно, в отличие от
                                полистирола, который проходит в непригодность после первого применения. Приборы можно
                                мыть в посудомоечной машине до 40 циклов.</p>
                        </div>
                    </div>
                    <div className="polypropyleneHome__card">
                        <div className="polypropyleneHome__card_row">
                            <img src={Socar} alt="Socar"/>
                            <p>Данные свойства подтверждаются сертификатами соответствия на изделия и на материал -
                                полипропилен производства Socar.</p>
                        </div>
                        <img className="quotes_first" src={Quotes} alt="Quotes"/>
                        <img className="quotes_second" src={Quotes} alt="Quotes"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolypropyleneHome;