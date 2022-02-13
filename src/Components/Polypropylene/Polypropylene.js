import React from 'react';
import PolypropyleneHome from "./polypropyleneHome";
import './polypropylene.scss';
import Environment from "./Environment";
import PolypropyleneSubtitle from "./polypropyleneSubtitle";
import Order from "../Details/Order/Order";
import Bag from "../Details/Bag/Bag";

const Polypropylene = () => {
    return (
        <main className="polypropylene">
            <div className="polypropylene__button">
                <Order/>
            </div>
            <div className="polypropylene__bag">
                <Bag/>
            </div>
            <PolypropyleneHome/>
            <Environment/>
            <PolypropyleneSubtitle/>
        </main>
    );
};

export default Polypropylene;