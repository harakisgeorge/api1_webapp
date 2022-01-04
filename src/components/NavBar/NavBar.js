import React from 'react'
import "./NavBar.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import {BsSearch} from "react-icons/bs";

 const NavBar = ({category}) => {
   let title_button;
   if (category=="Sport") {
      title_button = <a href="#" className="navbar__title-button-link sport">NNC</a> ;
    } else if (category=="Celebrity") {
      title_button = <a href="#" className="navbar__title-button-link celebrity" >NNC</a> ;
    }
    else if (category="Default"){
      title_button = <a href="#" className="navbar__title-button-link home" >NNC</a> ;
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