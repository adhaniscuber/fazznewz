import React, { useState } from "react";
import Post from "@components/molecules/post";
import useSWR from "swr";
import qs from "qs";
import { PostLoader } from "@components/content-loader";
import Error from "@components/molecules/error";
import { useSelector } from "react-redux";

const fetcher = url => fetch(url).then(res => res.json());

const FintechNews = props => {
  const tabActive = useSelector(({ rootReducer }) => rootReducer.tabActive);

  const options = qs.stringify({
    q: "fintech",
  });

  const { data, error } = useSWR(`/api/news/fintech?${options}`, fetcher);

  if (error) return <p>An error has occurred.</p>;
  if (data?.status === "error") return <Error message={data?.message} />;

  return (
    <div className={`posts-section ${!tabActive && "tab--active"}`}>
      <h1>{props.title}</h1>
      <div className="posts-section__scroll">
        {!data ? (
          <PostLoader />
        ) : (
          <>
            {data?.articles?.map((article, index) => (
              <Post key={index} data={article} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FintechNews;
