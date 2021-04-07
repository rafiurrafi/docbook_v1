import { Link } from "react-router-dom";
import React, { Component } from "react";
class Construction extends Component {
  state = {};
  render() {
    return (
      <div className="Construction">
        <div className="container">
          <h1 className="display-4 text-success">
            This page is under construction
          </h1>
          <Link to="/" className="btn btn-primary text-white">
            Go Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Construction;
