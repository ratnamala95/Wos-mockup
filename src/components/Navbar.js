import React, {useEffect,useState} from "react";
import banner from '../img/banner.jpg';
import '../css/Navbar.css';



function Navbar(){

    const [show, handleShow] = useState(false);


    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100 ){
                handleShow(true);
            }else handleShow(false);
        })   


        return() =>{
            window.removeEventListener('scroll',null);
        }
    },[]);

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

            <div className={`nav ${ show?'nav_purple':''}}`}>

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
                        <li className="list__item">Collections</li>
                        <li className="list__item">Furniture</li>
                        <li className="list__item">Accents</li>
                        <li className="list__item">Art</li>
                        <li className="list__item">Know Us</li>
                        <li className="list__item">Login</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}


export default Navbar;