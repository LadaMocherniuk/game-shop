import React from 'react';
import { useSelector } from 'react-redux';
import BuyCard from '../buy-card/BuyCard';
import GameGenre from '../game-genre/GameGenre';
import GamePic from '../pictures/GamePic';
import './gamePage.css';

const GamePage = () => {
    const game = useSelector(state => state.game.currentGame);
    if(!game) return null;
    return(
        <div className="page">
            <h1 className="pageTitle">{ game.title }</h1>
            <div className="pageContent">
                <div className="pageLeft">
                    <iframe 
                    width="90%"
                    height="400px"
                    src={game.video}
                    title="Youtube Video Player"
                    frameBorder="0">

                    </iframe>

                </div>
                <div className="pageRight">
                    <GamePic image={game.image}/>
                    <p>{game.description}</p>
                    <p className="tags">Мітки жанру гри:</p>
                    {game.genres.map((genre) => <GameGenre genre={ genre } key={ genre }/>)}
                    <div className="buy">
                        <BuyCard game={ game }/>
                    </div>

                </div>
             </div>
        
        </div>
    )
}
export default GamePage;