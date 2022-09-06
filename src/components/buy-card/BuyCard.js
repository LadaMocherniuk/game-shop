import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCard, setIteminCard } from '../redux/card/reducer';
import Button from '../button/Button';
import './buyCard.css';

const BuyCard = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.card.itemsInCard);
    const isItemInCard = items.some(item => item.id === game.id);
    const handleClick = (e) => {
        e.stopPropagation();
        if(isItemInCard){
            dispatch(deleteItemFromCard(game.id));
        }else {
            dispatch(setIteminCard(game));
        }
    }
    return (
        <div className="cardBuy">
            <span className="cardBuy_price">{game.price} грн</span>
            <Button type={ isItemInCard ? 'secondary' : 'primary'}
                onClick={handleClick}>
                {isItemInCard ? "Видалити з корзини" : "Додати до корзини"}
            </Button>
        </div>
    )
}
export default BuyCard;