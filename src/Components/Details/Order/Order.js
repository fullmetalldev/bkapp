import React from 'react';
import './Order.scss';


const Order = ({form, setForm}) => {
    return (
        <div className="details-box order">
            <button onClick={()=> setForm(!form)} className="details__order">
                <p>Заказать образцы</p>
            </button>
        </div>
    );
};

export default Order;