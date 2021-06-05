import React from "react";
import Post from "@components/molecules/post";
import data from "./data.json";
import Categories from "../molecules/categories";

const TopHeadlinesNews = ({ title, top }) => {
  return (
    <div className="posts-section">
      <h1>{title}</h1>
      <Categories />
      <div className="posts-section__scroll">
        {data.articles.map((post) => (
          <Post data={post} />
        ))}
      </div>
    </div>
  );
};

export default TopHeadlinesNews;
