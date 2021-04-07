import React, { Component } from "react";
import Title from "./common/title";
import doctorService from "./service/doctors";
import SingleDoctorShow from "./singleDoctorShow";
import "./styles/homeDoctors.css";
class HomeDoctors extends Component {
  state = {
    doctors: [],
  };
  componentDidMount() {
    const doctors = [...doctorService];
    this.setState({ doctors });
  }
  render() {
    return (
      <div className="HomeDoctors">
        <div className="container">
          <Title
            heading="Doctors"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate ipsum tempora necessitatibus?"
          />
          <div className="HomeDoctors-showcase">
            {this.state.doctors.map((doctor) => (
              <SingleDoctorShow
                img={doctor.img}
                name={doctor.name}
                department={doctor.department}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDoctors;
