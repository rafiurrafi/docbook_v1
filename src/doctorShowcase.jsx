import React, { Component } from "react";
import PageTitle from "./pageTitle";
import Navbar from "./navbar";
import "./styles/doctorShowcase.css";
import { Link } from "react-router-dom";
class DoctorShowcase extends Component {
  state = {};
  render() {
    const { doctors } = this.props;
    return (
      <div className="DoctorShowcase">
        <Navbar
          isHomePage={false}
          isLoggedIn={this.props.isLoggedIn}
          onLoggedOut={this.props.onLoggedOut}
        />
        <PageTitle title="Doctor" />
        <div className="container">
          <div className="DoctorShowcase-content">
            {doctors.map((doctor) => (
              <div className="DoctorShowcase-content-single">
                <img src={doctor.img} alt="" />
                <div className="DoctorShowcase-text">
                  <h4>{doctor.name}</h4>
                  <p>{doctor.department}</p>
                  <div className="DoctorShowcase-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="DoctorShowcase-metadata">
                    <i className="fa fa-map"></i> {doctor.location}
                  </div>
                  <div className="DoctorShowcase-metadata">
                    <i className="fa fa-watch"></i> Available on {doctor.time}
                  </div>
                  <div className="DoctorShowcase-metadata">
                    <i className="fa fa-money"></i> {doctor.fee}
                  </div>
                  <div className="DoctorShowcase-btn-group">
                    <Link
                      to={`/doctors/${doctor._id}`}
                      className="btn btn-full"
                    >
                      View Profile
                    </Link>
                    <Link to="/home#appointment" className="btn btn-ghost">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorShowcase;
