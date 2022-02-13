import React from 'react';
import LeavesAbout from './img/leavesAbout.png';
import Document from './img/document.png';
import TrainCycle from './img/traincycle.png';
import Delivery from './img/delivery.png';
import Box from './img/box.png';
import Tank from './img/tank.png';
import Process from './img/process.png';
import Logo from './img/logo.png';
import Polygon from './img/polygonpng.png';

const Cycle = () => {
    return (
        <section className="cycle">
            <img className="cycle__img" src={LeavesAbout} alt="LeavesAbout"/>
            <div className="container">
                <h2 className="section__title">Суточный производственный цикл производства изделия</h2>
                <div className="cycle__polygon">
                    <img className="cycle__polygon_logo" src={Logo} alt="Logo"/>
                    <div className="cycle__polygon_card first">
                        <div className="cycle__polygon_list">
                            <img className="cycle__polygon_card-img" src={Polygon} alt="Polygon"/>
                            <div className="cycle__polygon_card-item">
                                <img src={Document} alt="Document"/>
                            </div>
                            <p className="cycle__polygon_card-title">Заявка на поставку сырья</p>
                        </div>
                    </div>
                    <div className="cycle__polygon_card second">
                        <div className="cycle__polygon_list">
                            <img className="cycle__polygon_card-img" src={Polygon} alt="Delivery"/>
                            <div className="cycle__polygon_card-item">
                                <img src={TrainCycle} alt="Document"/>
                            </div>
                            <p className="cycle__polygon_card-title">Загрузка полипропилена в термопластавтомат
                            </p>
                        </div>
                    </div>
                    <div className="cycle__polygon_card third">
                        <div className="cycle__polygon_list">
                            <img className="cycle__polygon_card-img" src={Polygon} alt="Polygon"/>
                            <div className="cycle__polygon_card-item">
                                <img src={Delivery} alt="Delivery"/>
                            </div>
                            <p className="cycle__polygon_card-title">Отправка заказчику</p>
                        </div>
                    </div>
                    <div className="cycle__polygon_card fourth">
                        <div className="cycle__polygon_list">
                            <img className="cycle__polygon_card-img" src={Polygon} alt="Polygon"/>
                            <div className="cycle__polygon_card-item">
                                <img src={Box} alt="Box"/>
                            </div>
                            <p className="cycle__polygon_card-title">Упаковка в коробки</p>
                        </div>
                    </div>
                    <div className="cycle__polygon_card fifth">
                        <div className="cycle__polygon_list">
                            <img className="cycle__polygon_card-img" src={Polygon} alt="Polygon"/>
                            <div className="cycle__polygon_card-item">
                                <img src={Tank} alt="Tank"/>
                            </div>
                            <p className="cycle__polygon_card-title">Ручной или роботизированный выбор продукции</p>
                        </div>
                    </div>
                    <div className="cycle__polygon_card sixth">
                        <div className="cycle__polygon_list">
                            <img className="cycle__polygon_card-img" src={Polygon} alt="Polygon"/>
                            <div className="cycle__polygon_card-item">
                                <img src={Process} alt="Process"/>
                            </div>
                            <p className="cycle__polygon_card-title">Процесс производства</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cycle;