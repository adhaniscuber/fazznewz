import React, { useState } from "react";

const Tabs = ({ onSelected }) => {
  const [active, setActive] = useState("Headline");

  const onSelect = (label) => {
    setActive(label);
    onSelected(label);
  };

  return (
    <div className="tabs">
      <a
        onClick={() => onSelect("Headline")}
        className={`tabs__item ${
          active === "Headline" && "tabs__item--active"
        }`}
      >
        Headline
      </a>
      <a
        onClick={() => onSelect("Fintech")}
        className={`tabs__item ${active === "Fintech" && "tabs__item--active"}`}
      >
        Fintech
      </a>
      <a
        onClick={() => onSelect("Custom")}
        className={`tabs__item ${active === "Custom" && "tabs__item--active"}`}
      >
        Custom
      </a>
    </div>
  );
};

export default Tabs;
