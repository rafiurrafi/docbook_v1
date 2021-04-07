import React, { Component } from "react";
class ProfileSetting extends Component {
  state = { name: "", location: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      location: this.state.location,
    };
    this.props.onUpdateUser(user);
  };
  render() {
    const { users } = this.props;
    const { name, location } = this.state;
    return (
      <div className="ProfileSetting">
        <div className="ProfileSetting-form">
          <h3>Profile Setting</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter your name "
              required
            />{" "}
            <br />
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.handleChange}
              placeholder="Enter your Address "
              required
            />{" "}
            <br />
            <button className="btn btn-full">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProfileSetting;
