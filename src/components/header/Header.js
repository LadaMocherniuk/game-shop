import React from 'react';
import Card from '../card/Card';
import './header.css';

const Header = () => {
    return(
        <div className="header">
           <div className="wrapper">
               <href to="/" className="header_title">
                   Game Store
               </href>
                </div>
           <div className="wrapper header_card">
                <Card/>
           </div>
        </div>
    )
}
export default Header;