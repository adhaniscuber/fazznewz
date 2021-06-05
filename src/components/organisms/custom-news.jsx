import React, { useState } from "react";
import Post from "@components/molecules/post";
import useSWR from "swr";
import qs from "qs";
import { PostLoader } from "@components/content-loader";

const fetcher = (url) => fetch(url).then((res) => res.json());

const IndonesiaNews = ({ title, top }) => {
  const [source, setSource] = useState({
    label: "TechCrunch",
    value: "techcrunch",
  });

  const options = qs.stringify({
    sources: source.label,
  });

  const { data, error } = useSWR(`/api/news/custom?${options}`, fetcher);

  if (error) return <p>An error has occurred.</p>;

  return (
    <div className="posts-section">
      <div className="posts-section--custom-source">
        <h1>{source.label}</h1>
        <img
          className="settings"
          src="/assets/img/settings.svg"
          alt="settings"
        />
      </div>
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
