import React from 'react'
import './Sport.css'
import NavBar from '../../components/NavBar/NavBar';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header"
export const Sport = () => {
   
   return (
      <div className="App_container">
         <Header />
         <NavBar category={"Sport"}/>
         <NewsContainer  category={"Sport"}/>
         <Footer />
      </div>         
   )
}


export default Sport;