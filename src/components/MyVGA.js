import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./MyVGA.css";

class MyVGA extends Component {
  state = {
    isLoggedIn: true,
    activeUser: sessionStorage.getItem("activeUser"),
  }

  handleLogout = evt => {
    evt.preventDefault()
    sessionStorage.removeItem("activeUser")
    this.setState({ isLoggedIn: false })
  }

  isAuthenticated = () => {
    return sessionStorage.getItem("activeUser") !== null
}

  render() {
    if (this.state.isLoggedIn !== false) {
      return (
        <React.Fragment>
          <NavBar handleLogout={this.handleLogout} />
          <ApplicationViews />
        </React.Fragment>
      );
    }
  }
}

export default MyVGA;
