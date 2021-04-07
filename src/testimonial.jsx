import React from "react";
import "./styles/testimonial.css";
const Testimonial = (props) => {
  return (
    <div
      className="Testimonial"
      style={{
        backgroundImage:
          "linear-gradient(rgba(61, 95, 233, 0.705), rgba(61, 95, 233, 0.705)), url('/img/05.jpg')",
      }}
    >
      <div className="Testimonial-content">
        <blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta velit
          enim tempore, recusandae facilis suscipit pariatur ut incidunt nihil
          aut similique ipsum! Repellendus facilis culpa necessitatibus odio
          fugiat, soluta temporibus!
        </blockquote>
        <cite>
          <img src="/img/01.jpg" alt="" />
          <div className="cite-content">
            <h6>Abdur Rahim</h6>
            <p>Manager</p>
          </div>
        </cite>
      </div>
    </div>
  );
};

export default Testimonial;
