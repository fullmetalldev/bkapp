import React from 'react';
import './aboutCompany.scss';
import AboutCompanyHome from "./AboutCompanyHome";
import AboutFacts from "./AboutFacts";
import Cycle from "./Cycle";
import Order from "../../Components/Details/Order/Order";
import Bag from "../../Components/Details/Bag/Bag";

const AboutCompany = () => {
    return (
        <main className="aboutCompany">
            <div className="aboutCompany__button">
                <Order/>
            </div>
            <div className="aboutCompany__bag">
                <Bag/>
            </div>
            <AboutCompanyHome/>
            <AboutFacts/>
            <Cycle/>
        </main>
    );
};

export default AboutCompany;