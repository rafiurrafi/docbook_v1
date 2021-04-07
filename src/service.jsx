import React, { Component } from "react";
import Title from "./common/title";
import SingleService from "./singleService";
import "./styles/service.css";
class Service extends Component {
  static defaultProps = {
    services: [
      {
        _id: 1,
        icon: "eye",
        title: "Eye care",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 2,
        icon: "heartbeat",
        title: "Eye care",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 3,
        icon: "wheelchair-alt",
        title: "Eye care",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 4,
        icon: "user-md",
        title: "Eye care",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 5,
        icon: "stethoscope",
        title: "Eye care",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 6,
        icon: "skyatlas",
        title: "Eye care",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 7,
        icon: "eraser",
        title: "Eye care",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 8,
        icon: "pie-chart",
        title: "Eye care",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      },
    ],
  };
  render() {
    return (
      <div className="Service" id="service">
        <div className="container">
          <Title
            span="Departments"
            heading="Our medical service"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        enim dicta ea reprehenderit quae incidunt dolore aut. Asperiores, quis?
        Inventore?"
          />
          <div className="Service-content">
            {this.props.services.map((service) => (
              <SingleService
                key={service._id}
                icon={service.icon}
                title={service.title}
                paragraph={service.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
