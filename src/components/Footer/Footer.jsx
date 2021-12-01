import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css"
export const Footer = () => {
   return (
      <footer className="footer-container">
         <ul>
            <li><h3>Company</h3> </li>
            <li><a href="#">About </a></li>
            <li><a href="#">Services </a></li>
            <li><a href="#">Privacy </a></li>

         </ul>
         <ul>
            <li><h3>Get Help</h3> </li>
            <li><a href="#">About </a></li>
            

         </ul>
         <ul>
            <li><h3>Follow us</h3> </li>
            <li><a href="#"><FaFacebook /> </a></li>
            <li><a href="#"><FaTwitter /> </a></li>
            <li><a href="#"><FaInstagram /> </a></li>
            <li><a href="#"><FaLinkedinIn /> </a></li>

         </ul>
      </footer>
   )
}

export default Footer;