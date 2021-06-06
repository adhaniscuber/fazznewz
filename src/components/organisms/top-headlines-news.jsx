import React from "react";
import Post from "@components/molecules/post";
import Categories from "../molecules/categories";
import useSWR from "swr";
import qs from "qs";
import { PostLoader } from "@components/content-loader";
import Error from "@components/molecules/error";
import { useSelector } from "react-redux";

const fetcher = url => fetch(url).then(res => res.json());

const TopHeadlinesNews = props => {
  const { category, tabActive } = useSelector(({ rootReducer }) => rootReducer);

  const options = qs.stringify({
    country: "id",
    category,
  });

  const { data, error } = useSWR(`/api/news/top-headline?${options}`, fetcher);

  if (error) return <p>An error has occurred.</p>;
  if (data?.status === "error") return <Error message={data?.message} />;

  return (
    <div className={`posts-section ${!tabActive && "tab--active"}`}>
      <h1>{props.title}</h1>
      <Categories />
      <div className="posts-section__scroll posts-section__scroll--headline">
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

export default TopHeadlinesNews;
