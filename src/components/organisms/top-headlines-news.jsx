import React, { useState } from "react";
import Post from "@components/molecules/post";
import Categories from "../molecules/categories";
import useSWR from "swr";
import qs from "qs";
import { PostLoader } from "@components/content-loader";

const fetcher = url => fetch(url).then(res => res.json());

const TopHeadlinesNews = ({ title, active }) => {
  const [category, setCategory] = useState("general");

  const options = qs.stringify({
    country: "id",
    category,
  });

  const { data, error } = useSWR(`/api/news/top-headline?${options}`, fetcher);

  if (error) return <p>An error has occurred.</p>;

  return (
    <div className={`posts-section ${!active && "tab--active"}`}>
      <h1>{title}</h1>
      <Categories
        selected={category}
        onChoose={selected => setCategory(selected)}
      />
      <div className="posts-section__scroll posts-section__scroll--headline">
        {!data ? (
          <PostLoader />
        ) : (
          <>
            {data &&
              data.articles.map((article, index) => (
                <Post key={index} data={article} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TopHeadlinesNews;
