import React from "react";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Categories = ({ selected, onChoose }) => {
  return (
    <div className="posts__categories">
      <div className="posts__categories--overflow">
        {categories.map(category => {
          return (
            <a
              key={category}
              onClick={() => onChoose(category)}
              className={category === selected ? "active" : ""}
            >
              #{category}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
