import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import "./styles/profile.css";
import ProfileTable from "./common/profileTable";
import ProfileSetting from "./profileSetting";
class Profile extends Component {
  state = {};
  handleLogout = () => {
    this.props.onLoggedOut();
    this.props.history.push("/");
  };
  render() {
    const { users } = this.props;
    return (
      <div className="Profile">
        <Navbar
          isLoggedIn={this.props.isLoggedIn}
          onLoggedOut={this.props.onLoggedOut}
        />
        <div className="Profile-content">
          <div className="container">
            <div className="Profile-left">
              {users.length && (
                <div className="Profile-left-header">
                  <img src="/img/19.jpg" alt="" />
                  <h5>{users[0].name}</h5>
                  <p>{users[0].birthDate}</p>
                  <p>{users[0].location}</p>
                </div>
              )}
              <ul className="Profile-left-nav">
                <Link to="/profile/dashboard">Dashboard</Link>
                <Link to="/profile/setting">Settings</Link>
                <Link to="/profile/change-password">Change password</Link>
                <a href="javascript:void(0)" onClick={this.handleLogout}>
                  Logout
                </a>
              </ul>
            </div>
            <Switch>
              <Route
                path="/profile/dashboard"
                render={() => (
                  <ProfileTable
                    doctors={this.props.doctors}
                    appointments={this.props.appointments}
                  />
                )}
              />
              <Route
                path="/profile/setting"
                render={() => (
                  <ProfileSetting
                    users={users}
                    onUpdateUser={this.props.onUpdateUser}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;
