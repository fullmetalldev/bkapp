import React from 'react';
import './aboutCompany.scss';
import AboutCompanyHome from "./AboutCompanyHome";
import AboutFacts from "./AboutFacts";
import Cycle from "./Cycle";

const AboutCompany = () => {
    return (
        <main className="aboutCompany">
            <AboutCompanyHome/>
            <AboutFacts/>
            <Cycle/>
        </main>
    );
};

export default AboutCompany;