import React from "react";
import dayjs from "dayjs";

const Post = () => {
  return (
    <div className="post">
      <div className="post__head">
        <img
          className="post__head--image"
          src="/assets/img/thunder.svg"
          alt="source"
        />
        <p className="post__head--source">The Guardian</p>
      </div>
      <div className="post__body">
        <div className="content">
          <h3 className="content__title">Lorem ipsum dolor sit amet.</h3>
          <img
            className="content__image"
            src="https://image.cnbcfm.com/api/v1/image/106836977-1612792099253-gettyimages-1211442310-wm2_6890_2020030953941364.jpeg?v=1621439469"
            alt="constent img"
          />
          <p className="content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor
            error, esse magnam dolorum qui itaque odit id. Doloribus dicta
            dolorem ea animi distinctio! Explicabo itaque veniam repudiandae
            deleniti voluptatum magni earum doloribus, porro deserunt cum! At
            tempora voluptates ipsam illum vitae similique odit, optio iure,
            quae porro earum cum?
          </p>
        </div>
      </div>
      <div className="post__footer">
        <p>at {dayjs("2021-06-04T04:37:32Z").format("HH:mm, DD MMM YYYY")}</p>
        <p>by Author</p>
      </div>
    </div>
  );
};

export default Post;
