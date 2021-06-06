import React from "react";
import dayjs from "dayjs";

const Post = ({ data }) => {
  const { author, description, publishedAt, title, urlToImage, url, source } =
    data;

  return (
    <div className="post">
      <div className="post__head">
        <img
          className="post__head--image"
          src="/assets/img/thunder.svg"
          alt="source"
        />
        <p className="post__head--source">{source.name || "-"}</p>
      </div>
      <a className="post__body" href={url} target="_blank">
        <div className="content">
          <h3 className="content__title">{title || "-"}</h3>
          <img
            loading="lazy"
            className="content__image"
            src={urlToImage}
            alt="content img"
          />
          <p className="content__description">{description || "-"}</p>
        </div>
      </a>
      <div className="post__footer">
        <p>at {dayjs(publishedAt).format("HH:mm, DD MMM YYYY")}</p>
        <p>by {author || "-"}</p>
      </div>
    </div>
  );
};

export default Post;
