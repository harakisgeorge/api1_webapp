import React from 'react'
import "./NavBar.css"
export const NavBar = () => {
   return (
      <header className="navbar__main">
         
         <div className="navbar__navigation">
            <h3 className="navbar__title-button">
               <a href="#" >
                  
                     NNC
               </a>
            </h3> 
            <ul className="navbar__list">
               <li><a href="#">News</a></li>
               <li><a href="#">Sport</a></li>
               <li><a href="#">Culture</a></li>
               <li><a href="#">Celebrity</a></li>
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
               Search
            </a>
         </div>
      </header>
   )
}

export default NavBar;