import React from "react";
import banner from '../img/banner.jpg';
import '../css/Navbar.css';
function Navbar(){
    return(
        <header  className="navheader"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${banner})`,
                backgroungPosition: 'center center',
                width: '100%',
                height:' 60.4rem',
            }}
        >   

            <div className="nav">
                <div className="topnav">
                    <div className="left_items">
                        <span>contact@globalstonepaving.co.uk&nbsp;</span>&nbsp;
                        <span>&nbsp;+44 9799370711</span>
                    </div>
                    <div className="right__items">
                        <span>Track Order</span>&nbsp;  &nbsp;
                        <span>Contact</span>
                    </div>

                </div>
                <br/>
                <br/>
                <div className="navmenu">
                    <img src="logo" alt='globalstone logo'  className="navlogo"/>
                    <ul className="ul__menu">
                        <li>Collections</li>
                        <li>Furniture</li>
                        <li>Accents</li>
                        <li>Art</li>
                        <li>Know Us</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}


export default Navbar;