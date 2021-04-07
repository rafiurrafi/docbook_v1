import React, { Component } from "react";
import "./styles/hero.css";
class Hero extends Component {
  // divisions = [
  //   { _id: 1, name: "Dhaka" },
  //   { _id: 2, name: "Rajshahi" },
  //   { _id: 3, name: "Khulna" },
  //   { _id: 4, name: "Chittangong" },
  //   { _id: 5, name: "Barishal" },
  //   { _id: 6, name: "Shylhet" },
  //   { _id: 7, name: "Rangpur" },
  //   { _id: 8, name: "Mymanshing" },
  // ];
  styles = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/img/02.jpg)",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  render() {
    console.log(this.props);
    return (
      <div className="Hero">
        <div className="Hero-bg" style={this.styles}></div>
        <div className="Hero-content">
          <h1>Booking your appointments</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            quas debitis velit quam minus ipsam.
          </p>
          {/* <div className="Hero-search">
            <form onSubmit={this.handleSubmit}>
              <select name="" id="">
                {this.divisions.map((division) => (
                  <option key={division._id} value={division.name}>
                    {division.name}
                  </option>
                ))}
              </select>
              <input type="text" placeholder="Enter doctor Name " />
              <button>
                {" "}
                <i className="fa fa-search"></i> Search
              </button>
            </form>
          </div> */}
          <div className="Hero-btn-group">
            <a
              href="#"
              id="js--service-btn"
              className="btn btn-full u-mr-2 text-white"
            >
              View Service
            </a>
            <a href="#" id="js--appt-btn" className="btn btn-ghost">
              Book Now
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
