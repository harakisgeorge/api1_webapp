import React from 'react'
import "./NewsItem.css"
export const NewsItem = ({item,index}) => {
   return (
      <a href="#" className="newsitem-container">
         <img className="newsItem-image" src={item.image} alt="Image not found"/>
         <h3 className="newsItem-title">{item.title}</h3>
         <p className="newsItem-author"> Written by -- {item.author}</p>
      </a>
   )
}

export default NewsItem
