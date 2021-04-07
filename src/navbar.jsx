import React from "react";
import { Link } from "react-router-dom";
import NavLogged from "./navLogged";
import "./styles/navbar.css";
const Navbar = (props) => {
  const { isHomePage } = props;
  console.log(isHomePage);
  console.log(props.isLoggedIn);
  return (
    <div className={`Navbar container ${!isHomePage && "not-home"}`}>
      <img src="/img/logo-icon.png" alt="Logo" className="Navbar-logo" />
      <ul className={`Navbar-nav ${!isHomePage && "not-home"}`}>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctor</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
      </ul>
      <NavLogged
        isHomePage={props.isHomePage}
        isLoggedIn={props.isLoggedIn}
        onLoggedOut={props.onLoggedOut}
      />
    </div>
  );
};

export default Navbar;
