import React from 'react'
import './Celebrity.css'
import NavBar from '../../components/NavBar/NavBar';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header"

export const Sport = () => {
   
   return (
      <div className="App_container">
         <Header />
         <NavBar category={"Celebrity"}/>
         <NewsContainer category={"Celebrity"}/>
         <Footer />
      </div>         
   )
}


export default Sport;