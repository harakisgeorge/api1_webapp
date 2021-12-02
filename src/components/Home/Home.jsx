import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
   return (
      <div className="App_container">
         <NavBar />
         <NewsContainer />
         <Footer />
      </div>         
   )
}


export default Home;