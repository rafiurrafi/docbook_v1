import React, { Component } from "react";
import DocLocation from "./docLocation";
import DoctorProfileTop from "./doctorProfileTop";
import Navbar from "./navbar";
import Overview from "./overview";
import PageTitle from "./pageTitle";
import "./styles/doctors.css";
class Doctors extends Component {
  state = {};

  render() {
    return (
      <div className="Doctors">
        <Navbar
          isHomePage={false}
          isLoggedIn={this.props.isLoggedIn}
          onLoggedOut={this.props.onLoggedOut}
        />
        <PageTitle title="Doctor Profile" />
        <DoctorProfileTop
          doctors={this.props.doctors}
          doctorId={this.props.match.params.id}
        />
        {/* <Overview /> */}
        <DocLocation />
      </div>
    );
  }
}

export default Doctors;
