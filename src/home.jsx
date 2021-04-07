import React, { Component } from "react";
import About from "./about";
import Appointments from "./appointment";
import Hero from "./hero";
import HomeDoctors from "./homeDoctors";
import Mission from "./mission";
import Navbar from "./navbar";
import Service from "./service";
import "./styles/home.css";
import Testimonial from "./testimonial";
import Footer from "./footer";
class Home extends Component {
  state = {};

  render() {
    console.log(this.props.isLoggedIn);
    const { departments, doctors, onAddAppointment } = this.props;
    return (
      <div className="Home">
        <Navbar
          isHomePage={true}
          isLoggedIn={this.props.isLoggedIn}
          onLoggedOut={this.props.onLoggedOut}
        />
        <Hero />
        <Mission />
        <About />
        <Service />
        <Testimonial />
        <HomeDoctors />
        <Appointments
          doctors={doctors}
          departments={departments}
          onAddAppointment={onAddAppointment}
        />
      </div>
    );
  }
}

export default Home;
