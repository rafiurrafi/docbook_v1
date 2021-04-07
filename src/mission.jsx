import React, { Component } from "react";
import SingleMission from "./singleMission";
import "./styles/mission.css";
class Mission extends Component {
  static defaultProps = {
    missions: [
      {
        _id: 1,
        icon: "dashboard",
        heading: "Our mission",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 2,
        icon: "dashboard",
        heading: "Our Vision",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
      {
        _id: 3,
        icon: "dashboard",
        heading: "Who we are",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
      },
    ],
  };
  render() {
    return (
      <div className="Mission ">
        <div className="container">
          {this.props.missions.map((mission) => (
            <SingleMission
              key={mission._id}
              icon={mission.icon}
              heading={mission.heading}
              paragraph={mission.paragraph}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Mission;
