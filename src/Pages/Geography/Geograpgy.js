import React from 'react';
import './geography.scss';
import GeographyMap from './img/geographyMap.svg';

const Geograpgy = () => {
    return (
        <section className="geography">
            <div className="container">
                <h1 className="section__title">География продаж</h1>
                <div className="geography__img">
                    <img src={GeographyMap} alt="GeographyMap"/>
                </div>
            </div>
        </section>
    );
};

export default Geograpgy;