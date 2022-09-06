import React from 'react';
import './choosenOrder.css';


const ChoosenOrder = ({ title, price, }) => {
    return (
        <div className="choosenList">
            <span>{title}</span>
            <div className="choosenPrice">
                <span>{price} грн</span>
            </div>
        </div>
    )

}
export default ChoosenOrder;