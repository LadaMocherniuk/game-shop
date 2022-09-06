import React from 'react';
import { useNavigate }from "react-router-dom"
import { useDispatch } from 'react-redux';
import GamePic from '../pictures/GamePic';
import BuyCard from '../buy-card/BuyCard';
import GameGenre from '../game-genre/GameGenre'
import { setCurrentGame } from '../redux/game/reducer';
import './gameItem.css';

const GameItem = ({ game }) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`);
    }
    return(
        <div className="gameItem" onClick={ handleClick }>
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