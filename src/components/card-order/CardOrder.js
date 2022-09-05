import React from 'react';
import Button from '../button/Button';
import './cardOrder.css';
import ChoosenOrder from '../choosen-order/ChoosenOrder';

const CardOrder = ({ items, onClick }) => {
    const totalPrice = items.reduce((acc, item) => acc += item.price, 0 );
    return (
        <div className="order">
            <div className="gamesList">
                {
                    items.length > 0 ? items.map(game =>
                        <ChoosenOrder
                        title={game.title}
                        price={game.price}
                        id={game.id}/>) 
                        : "Ви ще не зробили замовлення:("
                }
            </div>
                {items.length > 0 ? 
                    (<div className="orderFinish">
                    <div className="totalPrice">
                        <span>Загалом</span>
                        <span>{totalPrice} грн</span>
                    </div>
                    <Button type="primary" size="m" onClick={onClick}>
                        Оформити замовлення
                    </Button>
                    </div>) : null}
                
        </div>      
    )
}
export default CardOrder;