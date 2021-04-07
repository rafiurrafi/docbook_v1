import React, { Component } from "react";
import "./styles/signin.css";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
class Signin extends Component {
  state = {
    errMessage: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ errMessage: "Username or password is incorrect" });
  };
  handleSignin = () => {
    this.props.onLoggedIn();
  };
  render() {
    return (
      <div className="Signin">
        <Navbar />
        <div className="Signin-content">
          <div className="Signin-form">
            <h3>Sign in</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Username</label> <br />
                <input type="text" placeholder="Enter username" />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label> <br />
                <input type="text" placeholder="Enter Password" />
              </div>
              <div className="Signin-errMsg">{this.state.errMessage}</div>
              <div className="Signin-btn-group">
                <button className="btn btn-full">Signin</button>
                <Link
                  to="/profile/dashboard"
                  onClick={this.handleSignin}
                  className="btn btn-ghost"
                >
                  Demo Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
