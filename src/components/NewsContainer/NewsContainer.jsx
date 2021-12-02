import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./NewsContainer.css"
import NewsItem from "../NewsItem/NewsItem"

const NewsContainer= () => {
  const [data, setData] = useState({ articles: [] });

  useEffect(async () => {
    const result = await axios(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0003891541194c679d493ef5b2555558',
    );
    
    setData(result.data);
    console.log(result.data);
  },[]);

  return (
    <div className="newsContainer">
      {data.articles.map(item => (
        <NewsItem item={item} />
      ))}
    </div>
  );
}

export default NewsContainer;