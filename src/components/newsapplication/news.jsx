import React, { useState, useEffect } from 'react';
import { Card, Input } from 'antd';
import "./news.css"
const { Meta } = Card;
const News = () => {
  const [newsData, setNewsData] = useState([]);
  const[searh,setsearh] = useState()
const newshandler = () =>{
    const apiKey = '3a86525732e34b4c83583244b005f38b';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    if(searh){
        apiUrl += `&q=${encodeURIComponent(searh)}`

    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.error('Error fetching news:', error));
}
  useEffect(() => {
   newshandler()
  }, []);
const searchhandler = (value) =>{
    setsearh(value)
}
  return (
    <div>
      <h1>Top News Headlines</h1>
      <Input.Search
      placeholder='Search news...'
      allowClear
      enterButton="Search"
      size="large"
      onSearch={searchhandler}
      />
      <div className='main'>
        {newsData.map((article, index) => (
          <Card key={index} style={{ width: 300, margin: '10px' }} 
          hoverable 
        cover={<img  src={article.urlToImage} alt={article.title} className='set-image'/>}
        bordered={true}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <Meta
                title={article.title}
                description={article.description}
              />
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default News;
