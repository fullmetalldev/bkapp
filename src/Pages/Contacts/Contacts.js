import React from 'react';
import "./contacts.css";
import "./ContactsAdaptive.css";
import gps from "./imgs/gps.png";
import call from "./imgs/call.png";
import time from "./imgs/clock.png";
import message from "./imgs/message.png";
import whats from "./imgs/whatsapp.png";
import contacts from "./imgs/contact.png";

const Contacts = () => {
    return (
        <main className="contacts">

            <div className="container">

                <div className="contacts__row">

                    <h2 className="contacts__route">
                        Главная / Контакты
                    </h2>

                    <h2 className="section__title">
                        ООО «БК»
                    </h2>

                    <div className="contacts__infoRow">
                        <img src={gps} alt="gps"/>
                        <span>Россия, Новосибирская область, Новосибирск, ул. 2-я Станционная, 30а, корпус 1
Почтовый индекс: 630041</span>
                    </div>
                    <div className="contacts__infoRow">
                        <img src={call} alt="call"/>

                        <span>+7(383)-377-77-32
 - по всем вопросам</span>
                    </div>
                    <div className="contacts__infoRow">
                        <img src={time} alt="clock"/>

                        <span>Режим работы: пн. - пт. с 09:00 до 18:00
</span>
                    </div>

                    <div className="contacts__columns">
                        <div className="contacts__columns_column">
                            <h4 className="contacts__columns_column-title">
                                Отдел комплектующих для<br/>
                                ПВХ окон:
                            </h4>
                            <div className="contacts__columns_column-row">
                                <img src={call} alt="call"/>
                                <a href="tel: +79137409649">+7(913)-740-96-49</a>
                            </div>
                            <div className="contacts__columns_column-row">

                                <img src={contacts} alt="contact"/>


                                <span>Багрий Максим</span>
                            </div>
                            <div className="contacts__columns_column-row">
                                <img src={message} alt="msg"/>

                                <span>Багрий Максим</span>
                            </div>

                            <button className="contacts__columns_column-btn">Заказать звонок</button>

                            <div className="contacts__columns_column-whatsapp">
                                <img src={whats} alt="call"/>
                                <a href="">Написать в WhatsApp</a>
                            </div>
                        </div>
                        <div className="contacts__columns_column">
                            <h4 className="contacts__columns_column-title">Отдел одноразовой посуды<br/>
                                и укупорки:</h4>
                            <div className="contacts__columns_column-row">
                                <img src={call} alt="msg icon"/>
                                <a href="tel: +79137873396">+7(913)-787-33-96</a>
                            </div>
                            <div className="contacts__columns_column-row">
                                <img src={contacts} alt="contact"/>
                                <span>Ключников Александр</span>
                            </div>
                            <div className="contacts__columns_column-row">
                                <img src={message} alt="msg"/>
                                <span>Багрий Максим</span>
                            </div>

                            <button className="contacts__columns_column-btn">Заказать звонок</button>

                            <div className="contacts__columns_column-whatsapp">
                                <img src={whats} alt="whats"/>
                                <a href="">Написать в WhatsApp</a>
                            </div>
                        </div>
                        <div className="contacts__columns_column">
                            <h4 className="contacts__columns_column-title">Отдел по размещению пресс-форм на нашем
                                производстве (аутсорсинг)</h4>
                            <div className="contacts__columns_column-row">
                                <img src={call} alt="call"/>
                                <a href="tel: +79529147026">+7(952)-914-70-26</a>
                            </div>
                            <div className="contacts__columns_column-row">
                                <img src={contacts} alt="contacts"/>
                                <span>Ефанов Евгений</span>
                            </div>
                            <div className="contacts__columns_column-row">
                                <img src={message} alt="message"/>
                                <span>Багрий Максим</span>
                            </div>

                            <button className="contacts__columns_column-btn">Заказать звонок</button>

                            <div className="contacts__columns_column-whatsapp">
                                <img src={whats} alt="whatsapp"/>
                                <a href="">Написать в WhatsApp</a>
                            </div>
                        </div>
                    </div>

                    <div className="contacts__map">
                        <iframe className="contacts__map-left"
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd7ba1a611a2c55efe0443d2502570945602f8a94e70a7d56ba6764d6d31d98d&amp;source=constructor"
                                width="1100" height="472" frameBorder="0"></iframe>
                        <div className="contacts__map-right">
                            <h2>ООО «БК»</h2>
                            <span>ООО «БК» ИНН/КПП: 5404434370/540401001</span>
                            <span>Юр. Адрес 630041, г. Новосибирск, ул. 2-ая Станционная 30 А</span>
                            <span> Фактический Адрес 630041, г. Новосибирск, ул. 2-ая Станционная 30 А</span>
                            <span>
БАНК: р/с 40702810304000002578 в банке «Левобережный» (ПАО). г. Новосибирск, БИК 045004850, корр/с 30101810100000000850</span>
                        </div>
                    </div>

                </div>

            </div>

        </main>
    );
};

export default Contacts;