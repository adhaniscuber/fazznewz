import React, { useState } from "react";
import Post from "@components/molecules/post";
import useSWR from "swr";
import qs from "qs";
import { PostLoader } from "@components/content-loader";
import { SourceModal } from "@components/molecules";

const fetcher = url => fetch(url).then(res => res.json());

const CustomNews = ({ active }) => {
  const [source, setSource] = useState({
    label: "TechCrunch",
    value: "techcrunch",
  });
  const [modalShow, setShow] = useState(false);

  const options = qs.stringify({
    sources: source.label,
  });

  const { data, error } = useSWR(`/api/news/custom?${options}`, fetcher);

  const handleChoose = newSource => {
    setSource(newSource);
    setShow(false);
  };

  if (error) return <p>An error has occurred.</p>;

  return (
    <div className={`posts-section ${!active && "tab--active"}`}>
      <div className="posts-section--custom-source">
        <h1>{source.label}</h1>
        <img
          className="settings"
          src="/assets/img/settings.svg"
          alt="settings"
          onClick={() => setShow(true)}
        />
      </div>
      {modalShow && <SourceModal onClose={setShow} onSelect={handleChoose} />}
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
