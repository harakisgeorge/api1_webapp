import React, {useState,useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import axios from 'axios';
import data from "./data"
import "./Slider.css"
const Slider = () => {
   const [latestNews,setLatestNews] = useState(data)
   const [index,setIndex] = React.useState(0)

  const nextSlide = () => {
     setIndex((oldindex)=>{
        let index = oldindex + 1;
        if(index> latestNews.length - 1){
           index = 0;
        }
        return index
     })
  }

  const prevSlide = () => {
   setIndex((oldindex)=>{
      let index = oldindex - 1;
      if(index> latestNews.length - 1){
         index = 0;
      }
      return index
   })
}
 

  useEffect(()=>{
     let slider = setInterval(() =>{
        setIndex((oldIndex) =>{
           let index = oldIndex + 1;
           if(index > latestNews.length - 1){
              index = 0
           }
           return index
        })
     },5000)
     return () =>{
        clearInterval(slider)
     }
  },[index])
      return (
         <section className='section'>
           <div className='title'>
             <h2>
               <span>/</span>reviews
             </h2>
           </div>
           <div className='section-center'>
             {latestNews.map((latest, latestIndex) => {
               const { id, title, country, time } = latest
     
               let position = 'nextSlide'
               if (latestIndex === index) {
                 position = 'activeSlide'
               }
               if (
                 latestIndex === index - 1 ||
                 (index === 0 && latestIndex === latest.length - 1)
               ) {
                 position = 'lastSlide'
               }
     
               return (
                 <article className={position} key={id}>
                   <h4>{title}</h4>
                   <p className='title'>{country}</p>
                   <p className='text'>{time}</p>
                   <FaQuoteRight className='icon' />
                 </article>
               )
             })}
             <button className='prev' onClick={prevSlide}>
               <FiChevronLeft />
             </button>
             <button className='next' onClick={nextSlide}>
               <FiChevronRight />
             </button>
           </div>
         </section>
       )
   
}

export default Slider
