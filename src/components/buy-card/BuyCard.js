import React from 'react';
import Button from '../button/Button';


import './buyCard.css';

const BuyCard = ({ game }) => {
    return(
        <div className="cardBuy">
            <span className="cardBuy_price">{game.price} uah</span>
            <Button
            type="primary"
           
            onClick={()=> null}
            Додати до кошику
             />
        </div>
    )

}
export default BuyCard;