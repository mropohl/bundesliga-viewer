import React, { Component, PropTypes } from "react";
import { Link, IndexLink } from "react-router";
import UserProfile from "./UserProfile";
import "./header.css";

export default class Header extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.handleLogout();
  };

  render() {
    const { user } = this.props;
    const pathname = this.props.location.pathname;
    const isLoginPage = pathname.indexOf("login") > -1;
    const isAboutPage = pathname.indexOf("about") > -1;
    const isUsersPage = pathname.indexOf("users") > -1;
    const isReposPage = pathname.indexOf("repos") > -1;

    return !isLoginPage &&
      <nav
        className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top"
      >
        
      </nav>;
  }
}

Header.propTypes = {
  user: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
  location: React.PropTypes.object
};
