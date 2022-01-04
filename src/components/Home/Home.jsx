import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import Slider from "../../components/Slider/Slider"
import NavBar from '../../components/NavBar/NavBar';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
   return (
      <div className="App_container">
         <Header />
         <NavBar category={"Default"}/>
         <Slider />
         <NewsContainer category={"Home"}/>
         <Footer />
      </div>         
   )
}


export default Home;