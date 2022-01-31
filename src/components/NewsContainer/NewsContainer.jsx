import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./NewsContainer.css"
import NewsItem from "../NewsItem/NewsItem"

const NewsContainer= ({category}) => {
  const [data, setData] = useState({ articles: [] });
  useEffect(async () => {
    let result;
    if (category=="Sport") {
      result = await axios(
        'https://gnews.io/api/v4/search?q=example&token=4e12bc3284d67cd4801eb18c3586c4c3',
      );
    }
    else {
      result = await axios(
        'https://gnews.io/api/v4/search?q=example&token=4e12bc3284d67cd4801eb18c3586c4c3',
      );    
    
    }
    
    setData(result.data);
    console.log(result.data);
  },[]);

  return (
    <div className="newsContainer">
      {data.articles.map((item,index) => (
        <NewsItem item={item} index={index} />
      ))}
    </div>
  );
}

export default NewsContainer;