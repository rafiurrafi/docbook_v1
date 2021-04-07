import React from "react";
import "./styles/about.css";
const About = (props) => {
  return (
    <div className="About">
      <div className="container">
        <img className="About-image" src="/img/about-2.png" alt="" />
        <div className="About-content">
          <span className="title-span">About doctor</span>
          <h2>
            Good service and better <br /> health by our specialist
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            praesentium placeat eaque ullam reprehenderit iusto sit pariatur
            voluptatem
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            beatae in vitae porro natus facilis soluta nihil maxime error sit
            nulla eveniet, delectus quis ex. Quos, voluptatibus? Doloribus, cum
            accusamus.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
