import React from "react";
import "./styles/overview.css";
const Overview = (props) => {
  return (
    <div className="Overview">
      <div className="container">
        <div className="Overview-content">
          <div className="Overview-about">
            <h3>About Me</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati corrupti odio minus totam labore quibusdam, dolorum
              facere? Incidunt, ipsum culpa rerum fugit unde iusto doloribus.
              Dolore dolores numquam quidem vero! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Obcaecati corrupti odio minus totam
              labore quibusdam, dolorum facere? Incidunt, ipsum culpa rerum
              fugit unde iusto doloribus. Dolore dolores numquam quidem vero!
            </p>
          </div>
          <div className="Overview-education">
            <h3>Education</h3>
            <div className="Overview-educations">
              <div className="Overview-education-single">
                <h4>American state university</h4>
                <p>BDS</p>
                <p>2005-2020</p>
              </div>
              <div className="Overview-education-single second-overview">
                <h4>American state university</h4>
                <p>BDS</p>
                <p>2005-2020</p>
              </div>
            </div>
          </div>
          <div className="Overview-education">
            <h3>Work & Experience</h3>
            <div className="Overview-educations">
              <div className="Overview-education-single">
                <h4>Glowing smile family dental clinic</h4>
                <p>2015 - present</p>
              </div>
              <div className="Overview-education-single second-work">
                <h4>Comfort Care Dental Clinic</h4>
                <p>2005-2020</p>
              </div>
            </div>
          </div>
          <div className="Overview-service">
            <h3>Service</h3>
            <ul>
              <li>Tooth cleaning</li>
              <li>Root canel therapy</li>
              <li>Implements</li>
              <li>Composing Bonding</li>
              <li>Surgical extraction</li>
              <li>Fissue Sealants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
