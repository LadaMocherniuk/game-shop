import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';

import './card.css';

const Card = () => {
    return(
        <div className="card">
            <AiOutlineShopping size={30} className="cardImg"/>
            <span className="cardTotal">34 grn</span>
     
        </div>
    )

}
export default Card;