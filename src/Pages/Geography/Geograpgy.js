import React from 'react';
import './geography.scss';
import GeographyMap from './img/geographyMap.svg';

const Geograpgy = () => {
    return (
        <section className="geography">
            <div className="container">
                <p className="section__navi">Главная / География продаж</p>
                <h1 className="section__title">География продаж</h1>
                <div className="geography__img">
                    <img src={GeographyMap} alt="GeographyMap"/>
                </div>
            </div>
        </section>
    );
};

export default Geograpgy;