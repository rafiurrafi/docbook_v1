import React from "react";
import SingleService from "./singleService";
import SingleMission from "./singleMission";
const AppointmentHint = (props) => {
  return (
    <div className="AppointmentHint">
      <SingleService
        isButton={false}
        icon="home"
        title="Book your appointment"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, error."
      />
      <SingleMission
        icon="home"
        heading="Success of treatment"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, error."
      />
      <SingleMission
        icon="home"
        heading="Modern Technology"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, error."
      />
      <SingleMission
        icon="home"
        heading="Certified Doctor"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, error."
      />
    </div>
  );
};

export default AppointmentHint;
