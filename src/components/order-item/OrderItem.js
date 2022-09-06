import React from 'react';
import { useDispatch } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import GamePic from '../pictures/GamePic';
import './orderItem.css';
import { deleteItemFromCard } from '../redux/card/reducer';

const OrderItem = ({ game }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCard(game.id));
    }
    return (
        <div className="orderItem">
            <div className="orderPic">
                <GamePic image={game.image} />
            </div>
            <div className="orderTitle">
                <span>{game.title}</span>
            </div>
            <div className="orderPrice">
                <span>{game.price}</span>
                <AiFillDelete
                    size={18}
                    className="orderDelete"
                    onClick={handleClick} />
            </div>

        </div>
    )
}
export default OrderItem;