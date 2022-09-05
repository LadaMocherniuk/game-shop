import React from 'react';
import './gameGenre.css';

const GameGenre = ({ genre }) => {
    return(
        <span className="genre">{ genre }</span>
    )
}
export default GameGenre;