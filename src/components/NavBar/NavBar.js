import React from 'react'
import "./NavBar.css"
 const NavBar = ({category}) => {
   let title_button;
   if (category=="Sport") {
      title_button = <h3 className="navbar__title-button sport"><a href="#" >NNC SPORT</a></h3> ;
    } else {
      title_button = <h3 className="navbar__title-button"><a href="#" >NNC</a></h3> ;
    }
   return (
      <header className="navbar__main">
         
         <div className="navbar__navigation">
           {title_button}
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