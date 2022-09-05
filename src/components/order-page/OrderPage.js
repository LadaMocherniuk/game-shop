import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../order-item/OrderItem';
import './orderPage.css';

const OrderPage = () => {
    const items = useSelector(state => state.card.itemsInCard);
    const totalPrice = items.reduce((acc, item) => acc += item.price, 0 );

    if(items.length < 1){
        <h1>Порожня корзина</h1>
    }
    return(
       <div className="pageOrder">
           <div className="pageLeft">
               {items.map(game => <OrderItem game={ game }/>)}
           </div>
           <div className="pageRight">
               <div className="pageTotalPrice">
                   <span>{items.length} на суму {totalPrice(items)}</span>

               </div>

           </div>

       </div>
    )
}
export default OrderPage;