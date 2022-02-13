import React from 'react';
import EnvironmentImg from './img/environment.png';
import LeavesImg from './img/leaves.png';

const Environment = () => {
    return (
        <section className="environment">
            <img className="environment__image" src={LeavesImg} alt="LeavesImg"/>
            <div className="container">
                <div className="environment__row">
                    <div className="environment__img">
                        <img src={EnvironmentImg} alt="EnvironmentImg"/>
                    </div>
                    <div className="environment__content">
                        <h2 className="environment__title">Забота об окружающей среде</h2>
                        <p>По сравнению с производством других пластмасс, процесс производства полипропилена может
                            снизить потребление энергии на 50% и потребление воды НА 20%</p>
                        <p className="environment__subtitle">Переработка и повторное использование полипропилена уменшает количество мусора.</p>
                        <p>Экономия энергии приводит к сокращению объема выбросов CO2 в атмосферу.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Environment;