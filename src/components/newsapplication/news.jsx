import React, { useState, useEffect } from 'react';
import { Card, Input, Select } from 'antd';
import axios from 'axios';
import "./news.css"
const { Meta } = Card;
const { Option } = Select;

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('us');

  useEffect(() => {
    fetchNews();
  }, [selectedCountry, searchQuery]);

  const fetchNews = () => {
    const apiKey = '3a86525732e34b4c83583244b005f38b';
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${apiKey}`;

    if (searchQuery.trim() !== '') {
      apiUrl += `&q=${encodeURIComponent(searchQuery)}`;
    }

    axios.get(apiUrl)
      .then((response) => setNewsData(response.data.articles))
      .catch((error) => console.error('Error fetching news:', error));
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  return (
    <div>
      <h1>Top News Headlines</h1>
      <div style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder="Search news..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Select
          style={{ width: 200 }}
          onChange={handleCountryChange}
          placeholder="change country"
        >
          <Option value="us">United States</Option>
          <Option value="gb">United Kingdom</Option>
          <Option value="ca">Canada</Option>
          {/* Add more country options as needed */}
        </Select>
      </div>
      <div className='main'>
        {newsData.map((article, index) => (
          <Card key={index} style={{ width: 300, margin: '10px' }}
          hoverable
          cover={<img src={article.urlToImage} className='set-image'/>}>
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

