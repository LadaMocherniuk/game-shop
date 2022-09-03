import React from 'react';
import './gameItem.css';
import GamePic from '../pictures/GamePic';
import BuyCard from '../buy-card/BuyCard';
import GameGenre from '../game-genre/GameGenre'

const GameItem = ({game}) => {
    return(
        <div className="gameItem">
            <GamePic image={game.image}/>
           <div className="gameItemDetail">
               <span className="gameItemTitle">{game.title}</span>
               <div className="gameItemGenre">
                   {
                       game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
                   }
               </div>
                <div className="gameItemBuy">
                    <BuyCard game={game}/>
                </div>
           </div>
        </div>
    )

}
export default GameItem;