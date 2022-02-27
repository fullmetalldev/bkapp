import React from 'react';
import "./DeliveryPay.css"
import "./DeliveryPayAdaptive.css"

const DeliveryAndPay = () => {
    return (
        <main className="DeliveryPay">

            <div className="container">

                <div className="DeliveryPay__row">

                    <h4 className="DeliveryPay__route"><a className="navLink" href="/">Главная</a> / Доставка и оплата</h4>

                    <div className="DeliveryPay__titleRow">
                        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M58.8898 6.20125L39.8913 0.0964804C39.5648 -0.0321601 39.2382 -0.0321601 38.8466 0.0964804L19.8481 6.20125C19.195 6.39399 18.7383 7.03673 18.7383 7.74354V32.2898C18.7383 32.9966 19.1955 33.5748 19.8481 33.8321L38.8466 39.9359C39.0424 40 39.1731 40 39.369 40C39.5648 40 39.6955 40 39.8913 39.9359L58.8898 33.767C59.5429 33.5743 59.9996 32.9315 59.9996 32.2247V7.74274C59.9996 7.03588 59.5424 6.45771 58.8898 6.20079L58.8898 6.20125ZM37.7368 36.2093L22.0027 31.1333V9.9284L28.2705 11.9203V23.9363C28.2705 24.8359 28.9886 25.5428 29.9026 25.5428C30.8166 25.5428 31.5348 24.8359 31.5348 23.9363V13.0127L37.8026 15.0046V36.2095L37.7368 36.2093ZM39.369 12.1772L34.9297 10.7635L38.0634 9.6712C38.9123 9.34982 39.369 8.4502 39.0425 7.61474C38.716 6.77928 37.8019 6.39374 36.9531 6.65106L29.9671 9.15709L25.5929 7.74344L39.3685 3.30958L53.144 7.74344L39.369 12.1772ZM56.7353 31.133L50.4675 33.1249V26.1855C50.4675 25.2859 49.7494 24.579 48.8354 24.579C47.9214 24.579 47.2687 25.2859 47.2687 26.1855V34.2176L41.0009 36.2095V15.0046L56.7351 9.92851L56.7353 31.133Z"
                                fill="#569E28"/>
                            <path
                                d="M11.9982 9.47852H1.48491C0.653384 9.47852 0 10.1854 0 11.0849C0 11.9845 0.653384 12.6914 1.48491 12.6914H11.9982C12.8297 12.6914 13.4831 11.9845 13.4831 11.0849C13.4235 10.1854 12.7701 9.47852 11.9982 9.47852Z"
                                fill="#569E28"/>
                            <path
                                d="M11.9982 18.4102H1.48491C0.653384 18.4102 0 19.117 0 20.0166C0 20.9162 0.653384 21.623 1.48491 21.623H11.9982C12.8297 21.623 13.4831 20.9162 13.4831 20.0166C13.4831 19.117 12.7701 18.4102 11.9982 18.4102Z"
                                fill="#569E28"/>
                            <path
                                d="M11.9982 27.3418H1.48491C0.653384 27.3418 0 28.0486 0 28.9482C0 29.8478 0.653384 30.5547 1.48491 30.5547H11.9982C12.8297 30.5547 13.4831 29.8478 13.4831 28.9482C13.4831 28.0486 12.7701 27.3418 11.9982 27.3418Z"
                                fill="#569E28"/>
                        </svg>
                        <span className="section__title">Доставка</span>
                    </div>

                    <div className="DeliveryPay__info">
                        <span>Компания БК работает с клиентами по всей России и странам СНГ.</span>
                        <span>Мы отправляем оптовые партии товара самыми разными способами. Сотрудничаем со множеством транспортных компаний и, по вашему желанию, отправляем <br/> в любую точку.</span>
                    </div>

                    <h4 className="DeliveryPay__deliveryInfo">Доставка осуществляется:</h4>

                    <div className="DeliveryPay__circleTitle">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                            <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                        </svg>
                        <span>Бесплатно по городу Новосибирску при заказе от 5 мест.</span>
                    </div>
                    <div className="DeliveryPay__circleTitle">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                            <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                        </svg>
                        <span>Бесплатно до офиса любой транспортной компании в Новосибирске.</span>
                    </div>
                    <div className="DeliveryPay__circleTitle">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#AB937F" fill-opacity="0.25"/>
                            <circle cx="8" cy="8" r="5" fill="#DDCBB5"/>
                        </svg>
                        <span>Доставка в регионы транспортными компаниями на выбор на особых условиях и в индивидуальном порядке.</span>
                    </div>

                    <div className="DeliveryPay__titleRow">
                        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M38.7951 30.0227C40.3413 30.0227 41.7333 29.2748 42.5062 28.0789C43.2796 29.2753 44.6711 30.0227 46.2174 30.0227C48.6918 30.0227 50.6248 28.0789 50.6248 25.7608C50.6248 23.368 48.6146 21.4988 46.2174 21.4988C44.6711 21.4988 43.2791 22.2467 42.5062 23.4426C41.7328 22.2462 40.3413 21.4988 38.7951 21.4988C36.3206 21.4988 34.3877 23.4426 34.3877 25.7608C34.3882 28.0789 36.3212 30.0227 38.7951 30.0227Z"
                                fill="#569E28"/>
                            <path
                                d="M12.121 24.1158H20.7805C21.8629 24.1158 22.7135 23.2933 22.7135 22.2466C22.7135 21.2 21.8629 20.3775 20.7805 20.3775H12.121C11.0386 20.3775 10.1881 21.2 10.1881 22.2466C10.111 23.2188 11.0386 24.1158 12.121 24.1158Z"
                                fill="#569E28"/>
                            <path
                                d="M10.1115 28.9758C10.1115 30.0225 10.962 30.845 12.0444 30.845H25.4979C26.5803 30.845 27.4309 30.0225 27.4309 28.9758C27.4309 27.9291 26.5803 27.1067 25.4979 27.1067H12.1215C11.039 27.1067 10.1113 27.9291 10.1113 28.9758H10.1115Z"
                                fill="#569E28"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.78872 40C1.701 40 0 38.3552 0 36.3363L0.00107956 3.66367C0.0782032 1.64486 1.77859 6.75947e-06 3.86632 6.75947e-06L29.9998 0V4.03695L4.3301 4.03696L4.33023 8.37338L29.9998 8.37337V15.3265H4.32995L4.33023 35.8872H29.9998L30.0002 40H3.78872ZM56.2113 40C58.299 40 60 38.3552 60 36.3363L59.9989 3.66367C59.9218 1.64486 58.2214 6.75947e-06 56.1337 6.75947e-06L30.0002 0V4.03695L55.6699 4.03696L55.6698 8.37338L30.0002 8.37337V15.3265H55.67L55.6698 35.8872H30.0002L30.0005 40H56.2113Z"
                                  fill="#569E28"/>
                        </svg>
                        <span className="section__title">Оплата</span>
                    </div>

                    <div className="DeliveryPay__info">
                        <span>Оплата товара в компании БК осуществляется по безналичному расчету по реквизитам.</span>
                        <span>Для получения счет, обратитесь к вашему менеджеру или отправьте запрос по электронной почте: bk_nsk@bk.ru</span>
                    </div>

                    <h2 className="DeliveryPay__beforePayMethods">
                        Общество с ограниченной ответственностью «БК»
                    </h2>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">Юр. адрес:</span>
                        <span className="DeliveryPay__payMethod-light">630041, г. Новосибирск, ул. 2-ая Станционная, 30 А</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold"> Факт. адрес:</span>
                        <span
                            className="DeliveryPay__payMethod-light">630041, г. Новосибирск, ул. 2-я Станционная, 30 А</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">ИНН:</span>
                        <span className="DeliveryPay__payMethod-light">5404434370</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">КПП:</span>
                        <span className="DeliveryPay__payMethod-light">540401001</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">ОГРН:</span>
                        <span className="DeliveryPay__payMethod-light">1115476038688</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">ОКПО:</span>
                        <span className="DeliveryPay__payMethod-light">69863890</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">БИК:</span>
                        <span className="DeliveryPay__payMethod-light">045004850</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">Р/с:</span>
                        <span className="DeliveryPay__payMethod-light">40702810304000002578</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">К/с:</span>
                        <span className="DeliveryPay__payMethod-light">30101810100000000850</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span
                            className="DeliveryPay__payMethod-light">В банке «Левобережный» (ПАО) г. Новосибирск</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">Тел./факс:</span>
                        <span className="DeliveryPay__payMethod-light">(383) 3-7777-32, 303-40-42, 913-897-49-04</span>
                    </div>

                    <div className="DeliveryPay__payMethod">
                        <span className="DeliveryPay__payMethod-bold">E-mail:</span>
                        <span className="DeliveryPay__payMethod-light">bk_nsk@bk.ru</span>
                    </div>


                </div>

            </div>

        </main>
    );
};

export default DeliveryAndPay;