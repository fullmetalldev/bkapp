import React from 'react';
import PolypropyleneHome from "./polypropyleneHome";
import './polypropylene.scss';
import Environment from "./Environment";
import PolypropyleneSubtitle from "./polypropyleneSubtitle";

const Polypropylene = () => {
    return (
        <main>
            <PolypropyleneHome/>
            <Environment/>
            <PolypropyleneSubtitle/>
        </main>
    );
};

export default Polypropylene;