import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../dashboard.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark justify-content-between">
        <a className="navbar-brand">Chatter Box</a>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Log Out
          </button>
      </nav>
    );
  }
}
