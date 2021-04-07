import { Link } from "react-router-dom";
import React from "react";
import "./styles/footer.css";
const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-logo">
          <Link to="/home">
            <img src="/img/logo-icon.png" alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            veritatis, totam, veniam dolor animi expedita dolore eaque beatae
            delectus
          </p>
          <div className="Footer-social">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
          </div>
        </div>
        <div className="Footer-contact">
          <h3>Contact us</h3>
          <div>
            <i className="fa fa-map"></i>3556 Beech Street
          </div>
          <div>
            <i className="fa fa-phone"></i> +880371682371
          </div>
          <div>
            <i className="fa fa-envelope"></i> xyz@company.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
