import React from 'react';
import bag from "./bagimg.png";

const Bag = ({cartScreen, setCartScreen}) => {
    return (
        <div onClick={()=> setCartScreen(!cartScreen)} className="details-box bag">
            <img src={bag} alt="bag icon"/>
            <span className="bag__count">4</span>
        </div>
    );
};

export default Bag;