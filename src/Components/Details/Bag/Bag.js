import React from 'react';
import './bag.scss';
import Bag3 from '../../../Pages/Home/imgs/bag3.png';

const Bag = () => {
    return (
        <div className="details-box bag">
            <img className="details__bag" src={Bag3} alt="Bag"/>
        </div>
    );
};

export default Bag;