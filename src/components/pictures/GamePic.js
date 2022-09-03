import React from 'react';

import './gamePic.css';


const GamePic = ({ image }) => {
    return(
        <div className="pic" style={{backgroundImage: `url(${image})`}}div/>
    )

}
export default GamePic;