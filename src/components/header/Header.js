import React from 'react';
import Card from '../card/Card';

import './header.css';

const Header = () => {
    return(
        <div className="header">
           <div className="wrapper">
               <a to="/" className="header_title">
                   Game Store
               </a>
                </div>
           <div className="wrapper header_card">
                <Card/>
           </div>
        </div>
    )

}
export default Header;