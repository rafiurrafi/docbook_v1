import React from "react";

const SingleMission = ({ icon, heading, paragraph }) => {
  return (
    <div className="SingleMission">
      <i className={`SingleMission-icon fa fa-${icon}`}></i>
      <div className="SingleMission-content">
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleMission;
