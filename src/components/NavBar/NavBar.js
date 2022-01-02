import React from 'react'
import "./NavBar.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import {BsSearch} from "react-icons/bs";

 const NavBar = ({category}) => {
   let title_button;
   if (category=="Sport") {
      title_button = <h3 className="navbar__title-button sport"><a href="#" className="navbar__title-button-link"><span>NNC</span> <span>Sport</span></a></h3> ;
    } else if (category=="Celebrity") {
      title_button = <h3 className="navbar__title-button celebrity"><a href="#" className="navbar__title-button-link" ><span>NNC</span> <span>Celebrity</span></a></h3> ;
    }
    else if (category=""){
      title_button = <h3 className="navbar__title-button home"><a href="#" className="navbar__title-button-link" ><span>NNC</span></a></h3> ;
    }
   return (
      <header className="navbar__main">
         
         <div className="navbar__navigation">
           {title_button}
            <ul className="navbar__list">
               <li><Link to="/">News</Link></li>
               <li><Link to="/sport">Sport</Link></li>
               <li><Link to="/celebrity">Celebrity</Link></li>
               <li><Link to="/sport">Sport</Link></li>
            </ul>
         </div>
         <div className="navbar__input">
            <a className="navbar__login-button">
               Login
            </a>
            <input className="navbar__input-box"
                  type="search"
                   name="q"
                   placeholder="search"/>
               <a className="navbar__search-button">
               <BsSearch />
            </a>
         </div>
      </header>
   )
}

export default NavBar;