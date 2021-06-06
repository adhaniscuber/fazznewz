import React, { useState } from "react";
import Post from "@components/molecules/post";
import useSWR from "swr";
import qs from "qs";
import { PostLoader } from "@components/content-loader";

const fetcher = url => fetch(url).then(res => res.json());

const IndonesiaNews = ({ title, active }) => {
  const options = qs.stringify({
    q: "fintech",
  });

  const { data, error } = useSWR(`/api/news/fintech?${options}`, fetcher);

  if (error) return <p>An error has occurred.</p>;

  return (
    <div className={`posts-section ${!active && "tab--active"}`}>
      <h1>{title}</h1>
      <div className="posts-section__scroll">
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

export default IndonesiaNews;
