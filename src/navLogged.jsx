import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navLogged.css";
class NavLogged extends Component {
  state = {
    showProfileMenu: false,
  };
  handleToggleProfile = () => {
    this.setState({ showProfileMenu: !this.state.showProfileMenu });
  };
  handleRender = () => {
    const { showProfileMenu } = this.state;
    const { isHomePage } = this.props;
    if (this.props.isLoggedIn) {
      return (
        <div>
          <a onClick={this.handleToggleProfile}>
            <img src="/img/13.jpg" alt="" className="Navbar-profile" />
          </a>
          <div className={`NavLogged-profile ${showProfileMenu && "active"}`}>
            <ul>
              <Link to="/profile/dashboard">Show profile</Link>
              <Link to="/profile/setting">Setting</Link>
              <Link to="/" onClick={this.props.onLoggedOut}>
                Log out
              </Link>
            </ul>
          </div>
        </div>
      );
    }
    if (!this.props.isLoggedIn) {
      return (
        <Link
          to="/signin"
          className={`NavLogged-signin-btn  ${!isHomePage && "not-home"}`}
        >
          Sign in
        </Link>
      );
    }
  };
  render() {
    const { showProfileMenu } = this.state;
    console.log(this.props.isLoggedIn);
    return <div className="NavLogged">{this.handleRender()}</div>;
  }
}

export default NavLogged;
