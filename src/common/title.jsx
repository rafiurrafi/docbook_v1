import React from "react";
import "../styles/title.css";
const Title = ({ span, heading, paragraph }) => {
  return (
    <div className="Title">
      <span className="title-span">{span}</span>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Title;
