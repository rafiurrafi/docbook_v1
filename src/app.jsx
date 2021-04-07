import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "./home";
import Doctors from "./doctors";
import "./styles/app.css";
import DoctorShowcase from "./doctorShowcase";
import doctorService from "./service/doctors";
import departmentService from "./service/departments";
import userService from "./service/user";
import Profile from "./profile";
import Signin from "./signin";
import Construction from "./construction";
import Navbar from "./navbar";
import Footer from "./footer";
class App extends Component {
  state = {
    isLoggedIn: true,
    doctors: [],
    departments: [],
    appointments: [],
    users: [],
  };
  componentDidMount() {
    const doctors = [...doctorService];
    const departments = [...departmentService];
    const users = [...userService];
    this.setState({ doctors, departments, users });
  }
  handleLoggedOut = () => {
    this.setState({ isLoggedIn: false });
  };
  handleLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  };
  handleAddAppointment = (appointment) => {
    const appointments = [...this.state.appointments, appointment];
    this.setState({ appointments });
  };
  handleUpdateUser = (user) => {
    const users = [...this.state.users];
    users[0].name = user.name;
    users[0].location = user.location;
    this.setState({ users });
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/doctors/:id"
            render={(props) => (
              <Doctors
                doctors={this.state.doctors}
                isLoggedIn={this.state.isLoggedIn}
                onLoggedOut={this.handleLoggedOut}
                {...props}
              />
            )}
          />
          <Route
            path="/doctors"
            render={(props) => (
              <DoctorShowcase
                doctors={this.state.doctors}
                isLoggedIn={this.state.isLoggedIn}
                onLoggedOut={this.handleLoggedOut}
                {...props}
              />
            )}
          />
          <Route
            path="/profile"
            render={(props) => (
              <Profile
                doctors={this.state.doctors}
                users={this.state.users}
                appointments={this.state.appointments}
                isLoggedIn={this.state.isLoggedIn}
                onLoggedOut={this.handleLoggedOut}
                onUpdateUser={this.handleUpdateUser}
                {...props}
              />
            )}
          />
          <Route
            path="/signin"
            render={(props) => (
              <Signin
                isLoggedIn={this.state.isLoggedIn}
                onLoggedIn={this.handleLoggedIn}
                {...props}
              />
            )}
          />
          <Route path="/about" component={Construction} />
          <Route path="/service" component={Construction} />
          <Route
            path="/"
            render={(props) => (
              <Home
                doctors={this.state.doctors}
                departments={this.state.departments}
                isLoggedIn={this.state.isLoggedIn}
                onLoggedOut={this.handleLoggedOut}
                onAddAppointment={this.handleAddAppointment}
                {...props}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
