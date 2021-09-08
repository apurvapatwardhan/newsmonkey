import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function News() {
  const [newsState, setNewsState] = useState([]);

  const [categoryState, setCategoryState] = useState("business");

  const categoryHandler = (e) => {
    console.log(e);
    setCategoryState(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${categoryState}&country=in&apiKey=e7cb8a7ce28140e3a168bfaab8efdced`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setNewsState(data.articles);
      });
  }, [categoryState]);

  return (
    <div>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Select Country</option>
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="3">Three</option>
      </select>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={categoryHandler}
      >
        <option defaultValue="business">Enter category</option>
        <option value="business">Business</option>
        <option value="health">Health</option>
        <option value="sports">Sports</option>
        <option value="science">Science</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
      </select>
      <div className="container my-3">
        <h2>News Top Headlines</h2>
        <div className="row">
          <div className="col md-4 mb-5">
            {newsState
              .filter((news, i) => i % 3 === 0)
              .map((newsItem) => (
                <NewsItem
                  title={newsItem.title.slice(0, 40)}
                  image={newsItem.urlToImage}
                  content={newsItem.description}
                  url={newsItem.url}
                  key={Math.random().toString()}
                />
              ))}
          </div>
          <div className="col md-4 mb-5">
            {newsState
              .filter((news, i) => i % 3 === 1)
              .map((newsItem) => (
                <NewsItem
                  title={newsItem.title.slice(0, 40)}
                  image={newsItem.urlImage}
                  content={newsItem.description}
                  url={newsItem.url}
                  key={Math.random().toString()}
                />
              ))}
          </div>
          <div className="col md-4 mb-5">
            {newsState
              .filter((news, i) => i % 3 === 2)
              .map((newsItem) => (
                <NewsItem
                  title={newsItem.title.slice(0, 40)}
                  image={newsItem.urlImage}
                  content={newsItem.description}
                  url={newsItem.url}
                  key={Math.random().toString()}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
