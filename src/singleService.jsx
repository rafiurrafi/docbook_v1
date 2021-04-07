import React from "react";
const SingleService = ({ icon, title, paragraph, isButton }) => {
  return (
    <div className="SingleService">
      <i className={`SingleService-icon fa fa-${icon}`}></i>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      {isButton && (
        <a href="#" className="btn btn-single">
          Read More
        </a>
      )}
    </div>
  );
};
SingleService.defaultProps = {
  isButton: true,
};
export default SingleService;
