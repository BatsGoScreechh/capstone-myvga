import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./MyVGA.css";

class MyVGA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarHidden: false
    };
  }
  state = {
    activeUser: sessionStorage.getItem("activeUser"),
    isNavbarHidden: false

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
    return (
      <div>
        <React.Fragment>
          <NavBar handleLogout={this.handleLogout} />
          <ApplicationViews />
        </React.Fragment>
      </div>
    )
  }
}

export default MyVGA;
