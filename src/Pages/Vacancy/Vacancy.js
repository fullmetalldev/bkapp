import React, {useState} from 'react';
import back from "./imgs/background.png";
import "./Vacancy.css"
import arrow from "./imgs/arrow.png";
import "./VacancyAdaptive.css"

const Vacancy = () => {

    const [vacPage, setVacPage] = useState(0);

    return (
        <main className="Vacancy">

            <div className="container">

                <div className="Vacancy__row">
                    <h2 className="Vacancy__route">Главная / Вакансии</h2>
                    <h2 className="section__title">Вакансии</h2>

                    <div className="Vacancy__twoBlocks">
                        <div className="Vacancy__twoBlocks_left">
                            <span className="Vacancy__twoBlocks_left-info">
                                Новосибирская компания. С 2011 г. занимается производством изделий из пластмасс для строительной (детали для стеклопакетов) и пищевой (супницы, соусницы) промышленности на собственных пресс-формах. За 9 месяцев 2019 г. компания изготовила более 58,5 млн ед. продукции.
                            </span>
                            <button className="Vacancy__twoBlocks_left-btn">Откликнуться на вакансию</button>
                        </div>
                        <div className="Vacancy__twoBlocks_right">
                            <img src={back} alt="background"/>
                        </div>
                    </div>

                    <div className="Vacancy__card" onClick={() => vacPage === 1 ? setVacPage('') : setVacPage(1)}>
                        <div className="Vacancy__card-block">
                            <h2>Вакансия №1</h2>
                            <img className={vacPage === 1 ? "rotate" : "arrow"} src={arrow} alt="arrow"/>
                        </div>
                        <div className="Vacancy__card_vacancyInfo" style={{display: vacPage === 1 ? "flex" : "none"}}>
                            <h4 className="Vacancy__card_vacancyInfo-city">
                                <span className="bold">Город:</span>
                                <span className="light">Новосибирск</span>
                            </h4>

                            <span className="Vacancy__card_vacancyInfo-about"> Компания ООО “ООО”, осуществляющий деятельность в области проектирования объектов федеральной значимости - авиационная промышленность,
                                <span>приглашает на работу ведущего инженера-конструктора.</span></span>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>

                                <span>Разработка ПД разделов КМ, КЖ, КР промышленных зданий и сооружений</span>
                            </div>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Расчёт конструкций</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Высшее профильное образование (ПГС)</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навыки проектирования железобетонных и металлических конструкций промышленных зданий и сооружений</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навык работы в программе SCAD</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Условия:</h4>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Официальное трудоустройство</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Возможности профессионального и карьерного роста</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>График работы: пн-пт с 8-30 до 17-30</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Место работы: Такой то район, ул. Такая то, 29</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Заработная плата: 00 000 руб</span>
                            </div>

                            <span className="Vacancy__card_vacancyInfo-contacts">
                                Отправить резюме Вы можете по адресу <a className="email">personal@aaaaaaaa.ru</a>
                            </span>

                            <div className="Vacancy__card_vacancyInfo-aboutBoss">
                                <span className="Vacancy__card_vacancyInfo-name">Фамилия Имя Отчество</span>
                                <a href="tel: +73830000000">+7 (383) 000-00-00, Доб. 000</a>
                                <a href="tel: +70000000000">+7 (000) 000-00-00</a>
                            </div>


                        </div>
                    </div>
                    <div className="Vacancy__card" onClick={() => vacPage === 2 ? setVacPage('') : setVacPage(2)}>
                        <div className="Vacancy__card-block">
                            <h2>Вакансия №2</h2>
                            <img className={vacPage === 2 ? "rotate" : "arrow"} src={arrow} alt="arrow"/>
                        </div>
                        <div className="Vacancy__card_vacancyInfo" style={{display: vacPage === 2 ? "flex" : "none"}}>
                            <h4 className="Vacancy__card_vacancyInfo-city">
                                <span className="bold">Город:</span>
                                <span className="light">Новосибирск</span>
                            </h4>

                            <span className="Vacancy__card_vacancyInfo-about"> Компания ООО “ООО”, осуществляющий деятельность в области проектирования объектов федеральной значимости - авиационная промышленность,
                                <span>приглашает на работу ведущего инженера-конструктора.</span></span>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Разработка ПД разделов КМ, КЖ, КР промышленных зданий и сооружений</span>
                            </div>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Расчёт конструкций</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Высшее профильное образование (ПГС)</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навыки проектирования железобетонных и металлических конструкций промышленных зданий и сооружений</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навык работы в программе SCAD</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Условия:</h4>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Официальное трудоустройство</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Возможности профессионального и карьерного роста</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>График работы: пн-пт с 8-30 до 17-30</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Место работы: Такой то район, ул. Такая то, 29</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Заработная плата: 00 000 руб</span>
                            </div>

                            <span className="Vacancy__card_vacancyInfo-contacts">
                                Отправить резюме Вы можете по адресу <a className="email">personal@aaaaaaaa.ru</a>
                            </span>

                            <div className="Vacancy__card_vacancyInfo-aboutBoss">
                                <span className="Vacancy__card_vacancyInfo-name">Фамилия Имя Отчество</span>
                                <a href="tel: +73830000000">+7 (383) 000-00-00, Доб. 000</a>
                                <a href="tel: +70000000000">+7 (000) 000-00-00</a>
                            </div>


                        </div>
                    </div>
                    <div className="Vacancy__card" onClick={() => vacPage === 3 ? setVacPage('') : setVacPage(3)}>
                        <div className="Vacancy__card-block">
                            <h2>Вакансия №3</h2>
                            <img className={vacPage === 3 ? "rotate" : "arrow"} src={arrow} alt="arrow"/>
                        </div>
                        <div className="Vacancy__card_vacancyInfo" style={{display: vacPage === 3 ? "flex" : "none"}}>
                            <h4 className="Vacancy__card_vacancyInfo-city">
                                <span className="bold">Город:</span>
                                <span className="light">Новосибирск</span>
                            </h4>

                            <span className="Vacancy__card_vacancyInfo-about"> Компания ООО “ООО”, осуществляющий деятельность в области проектирования объектов федеральной значимости - авиационная промышленность,
                                <span>приглашает на работу ведущего инженера-конструктора.</span></span>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Разработка ПД разделов КМ, КЖ, КР промышленных зданий и сооружений</span>
                            </div>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Расчёт конструкций</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Высшее профильное образование (ПГС)</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навыки проектирования железобетонных и металлических конструкций промышленных зданий и сооружений</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навык работы в программе SCAD</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Условия:</h4>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Официальное трудоустройство</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Возможности профессионального и карьерного роста</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>График работы: пн-пт с 8-30 до 17-30</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Место работы: Такой то район, ул. Такая то, 29</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Заработная плата: 00 000 руб</span>
                            </div>

                            <span className="Vacancy__card_vacancyInfo-contacts">
                                Отправить резюме Вы можете по адресу <a className="email">personal@aaaaaaaa.ru</a>
                            </span>

                            <div className="Vacancy__card_vacancyInfo-aboutBoss">
                                <span className="Vacancy__card_vacancyInfo-name">Фамилия Имя Отчество</span>
                                <a href="tel: +73830000000">+7 (383) 000-00-00, Доб. 000</a>
                                <a href="tel: +70000000000">+7 (000) 000-00-00</a>
                            </div>


                        </div>
                    </div>
                    <div className="Vacancy__card" onClick={() => vacPage === 4 ? setVacPage('') : setVacPage(4)}>
                        <div className="Vacancy__card-block">
                            <h2>Вакансия №4</h2>
                            <img className={vacPage === 4 ? "rotate" : "arrow"} src={arrow} alt="arrow"/>
                        </div>
                        <div className="Vacancy__card_vacancyInfo" style={{display: vacPage === 4 ? "flex" : "none"}}>
                            <h4 className="Vacancy__card_vacancyInfo-city">
                                <span className="bold">Город:</span>
                                <span className="light">Новосибирск</span>
                            </h4>

                            <span className="Vacancy__card_vacancyInfo-about"> Компания ООО “ООО”, осуществляющий деятельность в области проектирования объектов федеральной значимости - авиационная промышленность,
                                <span>приглашает на работу ведущего инженера-конструктора.</span></span>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Разработка ПД разделов КМ, КЖ, КР промышленных зданий и сооружений</span>
                            </div>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Расчёт конструкций</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Высшее профильное образование (ПГС)</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навыки проектирования железобетонных и металлических конструкций промышленных зданий и сооружений</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навык работы в программе SCAD</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Условия:</h4>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Официальное трудоустройство</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Возможности профессионального и карьерного роста</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>График работы: пн-пт с 8-30 до 17-30</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Место работы: Такой то район, ул. Такая то, 29</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Заработная плата: 00 000 руб</span>
                            </div>

                            <span className="Vacancy__card_vacancyInfo-contacts">
                                Отправить резюме Вы можете по адресу <a className="email">personal@aaaaaaaa.ru</a>
                            </span>

                            <div className="Vacancy__card_vacancyInfo-aboutBoss">
                                <span className="Vacancy__card_vacancyInfo-name">Фамилия Имя Отчество</span>
                                <a href="tel: +73830000000">+7 (383) 000-00-00, Доб. 000</a>
                                <a href="tel: +70000000000">+7 (000) 000-00-00</a>
                            </div>


                        </div>
                    </div>
                    <div className="Vacancy__card" onClick={() => vacPage === 5 ? setVacPage('') : setVacPage(5)}>
                        <div className="Vacancy__card-block">
                            <h2>Вакансия №5</h2>
                            <img className={vacPage === 5 ? "rotate" : "arrow"} src={arrow} alt="arrow"/>
                        </div>
                        <div className="Vacancy__card_vacancyInfo" style={{display: vacPage === 5 ? "flex" : "none"}}>
                            <h4 className="Vacancy__card_vacancyInfo-city">
                                <span className="bold">Город:</span>
                                <span className="light">Новосибирск</span>
                            </h4>

                            <span className="Vacancy__card_vacancyInfo-about"> Компания ООО “ООО”, осуществляющий деятельность в области проектирования объектов федеральной значимости - авиационная промышленность,
                                <span>приглашает на работу ведущего инженера-конструктора.</span></span>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Разработка ПД разделов КМ, КЖ, КР промышленных зданий и сооружений</span>
                            </div>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>                                <span>Расчёт конструкций</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Высшее профильное образование (ПГС)</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навыки проектирования железобетонных и металлических конструкций промышленных зданий и сооружений</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навык работы в программе SCAD</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Условия:</h4>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Официальное трудоустройство</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Возможности профессионального и карьерного роста</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>График работы: пн-пт с 8-30 до 17-30</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Место работы: Такой то район, ул. Такая то, 29</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Заработная плата: 00 000 руб</span>
                            </div>

                            <span className="Vacancy__card_vacancyInfo-contacts">
                                Отправить резюме Вы можете по адресу <a className="email">personal@aaaaaaaa.ru</a>
                            </span>

                            <div className="Vacancy__card_vacancyInfo-aboutBoss">
                                <span className="Vacancy__card_vacancyInfo-name">Фамилия Имя Отчество</span>
                                <a href="tel: +73830000000">+7 (383) 000-00-00, Доб. 000</a>
                                <a href="tel: +70000000000">+7 (000) 000-00-00</a>
                            </div>


                        </div>
                    </div>
                    <div className="Vacancy__card" onClick={() => vacPage === 6 ? setVacPage('') : setVacPage(6)}>
                        <div className="Vacancy__card-block">
                            <h2>Вакансия №6</h2>
                            <img className={vacPage === 6 ? "rotate" : "arrow"} src={arrow} alt="arrow"/>
                        </div>
                        <div className="Vacancy__card_vacancyInfo" style={{display: vacPage === 6 ? "flex" : "none"}}>
                            <h4 className="Vacancy__card_vacancyInfo-city">
                                <span className="bold">Город:</span>
                                <span className="light">Новосибирск</span>
                            </h4>

                            <span className="Vacancy__card_vacancyInfo-about"> Компания ООО “ООО”, осуществляющий деятельность в области проектирования объектов федеральной значимости - авиационная промышленность,
                                <span>приглашает на работу ведущего инженера-конструктора.</span></span>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Разработка ПД разделов КМ, КЖ, КР промышленных зданий и сооружений</span>
                            </div>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Расчёт конструкций</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Обязанности:</h4>

                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Высшее профильное образование (ПГС)</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навыки проектирования железобетонных и металлических конструкций промышленных зданий и сооружений</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Навык работы в программе SCAD</span>
                            </div>

                            <h4 className="Vacancy__card_vacancyInfo-punct">Условия:</h4>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Официальное трудоустройство</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Возможности профессионального и карьерного роста</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>График работы: пн-пт с 8-30 до 17-30</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Место работы: Такой то район, ул. Такая то, 29</span>
                            </div>
                            <div className="Vacancy__card_vacancyInfo-point">
                                <div className="circleDiv">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                                        <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                                    </svg>
                                </div>
                                <span>Заработная плата: 00 000 руб</span>
                            </div>

                            <span className="Vacancy__card_vacancyInfo-contacts">
                                Отправить резюме Вы можете по адресу <a className="email">personal@aaaaaaaa.ru</a>
                            </span>

                            <div className="Vacancy__card_vacancyInfo-aboutBoss">
                                <span className="Vacancy__card_vacancyInfo-name">Фамилия Имя Отчество</span>
                                <a href="tel: +73830000000">+7 (383) 000-00-00, Доб. 000</a>
                                <a href="tel: +70000000000">+7 (000) 000-00-00</a>
                            </div>


                        </div>
                    </div>
                </div>

            </div>


        </main>
    );
};

export default Vacancy;