import React, { Component } from "react";
import "./styles/docLocation.css";
class DocLocation extends Component {
  static defaultProps = {
    clinics: [
      {
        _id: 1,
        name: "Smile Cute Dental Care Center",
        title: "MDS - Periodentology and Oral Implementology, BDS",
        location: "2286 Sundown Lane, Austin, Texas, 78749 USA",
        time: [
          {
            day: "Mon - Sat",
            duration: ["10:00 AM - 2:00 PM", "4:00 PM - 9:00 PM "],
          },
          {
            day: "Sun",
            duration: ["10:00 AM - 2:00 PM"],
          },
        ],
      },
      {
        _id: 2,
        name: "The Family Dentistry Clinic",
        title: "MDS - Periodentology and Oral Implementology, BDS",
        location: "2886 University street, Settle, Washintone, 78749 USA",
        time: [
          {
            day: "Tue - Fri",
            duration: ["10:00 AM - 2:00 PM", "4:00 PM - 9:00 PM "],
          },
          {
            day: "Sat - Sun",
            duration: ["8:00 AM - 10:00 AM", "3:00 PM - 7:00 PM"],
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="DocLocation">
        <div className="container">
          {this.props.clinics.map((clinic) => (
            <div className="DocLocation-content">
              <div className="DocLocation-details">
                <h3>{clinic.name}</h3>
                <p>{clinic.title}</p>
                <span className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                  <span>(4)</span>
                </span>
                <p>
                  <i className="fa fa-location"></i> {clinic.location}
                </p>
              </div>
              <div className="DocLocation-schedule">
                {clinic.time.map((schedule) => (
                  <div className="DocLocation-schedule-single">
                    <h5>{schedule.day}</h5>
                    <ul>
                      {schedule.duration.map((time) => (
                        <li>{time}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="DocLocation-price">${250 * clinic._id}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DocLocation;
