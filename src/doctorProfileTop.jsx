import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/doctorProfileTop.css";
class DoctorProfileTop extends Component {
  state = {};
  getDoctor = () => {
    const { doctors } = this.props;
    const { doctorId } = this.props;
    console.log(doctors, doctorId);
    const doctor = doctors.find((doctor) => doctor._id == doctorId);
    return doctor;
  };
  render() {
    const doctor = this.getDoctor();
    return (
      <div className="DoctorProfileTop">
        <div className="container">
          <img src={doctor.img} alt="" />
          <div className="DoctorProfileTop-description">
            <h3>{doctor.name}</h3>
            <p>Bds, MDS - Periodentology and Oral Implementology</p>
            <div className="department">
              <i className="fa fa-calendar u-mr-2"></i> {doctor.department}
            </div>
            <span className="DoctorProfileTop-rating">
              <span className="DoctorProfileTop-rating-star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </span>
              <span className="DoctorProfileTop-rating-num">
                ({doctor.rating.number})
              </span>
            </span>
          </div>
          <div className="DoctorProfileTop-info">
            <div>
              <i className="fa fa-heart"></i> 99%
            </div>
            <div>
              <i className="fa fa-comment"></i> {doctor.rating.number} feedback
            </div>
            <div>
              <i className="fa fa-map"></i> {doctor.location}
            </div>
            <div>
              <i className="fa fa-money"></i> {doctor.fee} per hour
            </div>
            <div className="contact">
              <i className="fa fa-bookmark"></i>
              <i className="fa fa-phone"></i>
              <i className="fa fa-bookmark"></i>
              <i className="fa fa-phone"></i>
            </div>
            <Link to="/#appointment" className="btn btn-full">
              Book appointment
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorProfileTop;
