import React from "react";
import "./styles/pageTitle.css";
const PageTitle = (props) => {
  return (
    <div className="PageTitle">
      <div className="container">
        <span>Home / {props.title}</span>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
