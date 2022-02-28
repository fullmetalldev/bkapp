import React from 'react';
import bag from "./bagimg.png";
import '../Order/Order.scss';

const Bag = ({cartScreen, setCartScreen}) => {
    return (
        <div onClick={()=> setCartScreen(!cartScreen)} className="details__bag details-box bag">
            <img className="icon" src={bag} alt="bag icon"/>
            <span className="bag__count">4</span>
        </div>
    );
};

export default Bag;