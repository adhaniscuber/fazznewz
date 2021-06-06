import React from "react";

const Error = ({ message }) => {
  return (
    <div className="error">
      <img src="/assets/img/warning.svg" alt="error" />
      <p>{message}</p>
    </div>
  );
};

export default Error;
