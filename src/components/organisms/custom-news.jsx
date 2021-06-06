import React, { useState } from "react";
import Post from "@components/molecules/post";
import useSWR from "swr";
import qs from "qs";
import { PostLoader } from "@components/content-loader";
import { SourceModal } from "@components/molecules";
import Error from "@components/molecules/error";
import { useDispatch, useSelector } from "react-redux";
import { showModalSource } from "@redux/actions";

const fetcher = url => fetch(url).then(res => res.json());

const CustomNews = () => {
  const dispatch = useDispatch();
  const { tabActive, source, modalShow } = useSelector(
    ({ rootReducer }) => rootReducer,
  );

  const options = qs.stringify({
    sources: source.value,
  });

  const { data, error } = useSWR(`/api/news/custom?${options}`, fetcher);

  const handleOpenModal = () => {
    dispatch(showModalSource(true));
  };

  if (error) return <p>An error has occurred.</p>;
  if (data?.status === "error") return <Error message={data?.message} />;

  return (
    <div className={`posts-section ${!tabActive && "tab--active"}`}>
      <div className="posts-section--custom-source">
        <h1>{source.label}</h1>
        <img
          className="settings"
          src="/assets/img/settings.svg"
          alt="settings"
          onClick={handleOpenModal}
        />
      </div>
      {modalShow && <SourceModal />}
      <div className="posts-section__scroll">
        {!data ? (
          <PostLoader />
        ) : data?.articles?.length ? (
          <>
            {data?.articles?.map((article, index) => (
              <Post key={index} data={article} />
            ))}
          </>
        ) : (
          <div className="nodata">
            <img src="/assets/img/thunder.svg" alt="source" />
            <p>No Data</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomNews;
