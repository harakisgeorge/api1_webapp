import React from 'react'
import "./Header.css"
const Header = () => {
   return (
      <header className='header-container'>
         <ul className='header-list'>
            <li><a href="#">TV</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Radio</a></li>
            <li><a href="#">Social Media</a></li>

         </ul>
      </header>
   )
}

export default Header
