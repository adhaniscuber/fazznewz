import { updateCategory } from "@redux/actions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector(({ rootReducer }) => rootReducer.category);

  const handleCategory = value => () => {
    dispatch(updateCategory(value));
  };

  return (
    <div className="posts__categories">
      <div className="posts__categories--overflow">
        {categories.map(item => {
          return (
            <a
              key={item}
              onClick={handleCategory(item)}
              className={item === category ? "active" : ""}
            >
              #{item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
