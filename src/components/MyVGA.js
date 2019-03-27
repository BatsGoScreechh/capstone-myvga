import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./MyVGA.css";

class MyVGA extends Component {
  state = {
   isLoggedIn: true
  }

  handleLogout = evt => {
    evt.preventDefault()
    sessionStorage.removeItem("activeUser")
    this.setState({isLoggedIn: false})

}

  render() {
    return (
      <React.Fragment>
        <NavBar handleLogout={this.handleLogout}/>
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default MyVGA;
