import React from "react";
const SingleDoctorShow = ({ img, name, department }) => {
  return (
    <div className="SingleDoctorShow">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{department}</p>
    </div>
  );
};

export default SingleDoctorShow;
