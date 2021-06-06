import React from "react";
import { activeTab } from "@redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Tabs = () => {
  const dispatch = useDispatch();
  const { tabActive, source } = useSelector(({ rootReducer }) => rootReducer);

  const handleActive = label => () => {
    dispatch(activeTab(label));
  };

  return (
    <div className="tabs">
      <a
        onClick={handleActive("Headline")}
        className={`tabs__item ${
          tabActive === "Headline" && "tabs__item--active"
        }`}
      >
        Headline
      </a>
      <a
        onClick={handleActive("Fintech")}
        className={`tabs__item ${
          tabActive === "Fintech" && "tabs__item--active"
        }`}
      >
        Fintech
      </a>
      <a
        onClick={handleActive("Custom")}
        className={`tabs__item ${
          tabActive === "Custom" && "tabs__item--active"
        }`}
      >
        {source.label}
      </a>
    </div>
  );
};

export default Tabs;
