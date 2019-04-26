import React, {Route, Redirect, Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./MyVGA.css";

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
  </div>
)
class MyVGA extends Component {

  state = {
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
