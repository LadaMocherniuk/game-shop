import React, { useState, useCallback } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CardOrder from '../card-order/CardOrder';
import './card.css';

const Card = () => {
    const items = useSelector(state => state.card.itemsInCard);
    const totalPrice = items.reduce((acc, item) => acc += item.price, 0);
    const [menuVisible, setMenuVisible] = useState(false);
    let navigate = useNavigate();

    const handleClick = useCallback(() => {
        setMenuVisible(false);
        navigate('/order');
    }, [navigate]);

    return (
        <div className="card">
            <AiOutlineShopping size={30} className="cardImg" onClick={() => setMenuVisible(!menuVisible)} />
            {totalPrice > 0 ? <span className="cardTotal">{totalPrice} грн</span> : null}
            { menuVisible && <CardOrder items={items} onClick={handleClick} />}

        </div>
    )

}
export default Card;