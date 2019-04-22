import React, { Component } from "react"
import "./Login.css"
import login from "./login.png"
export default class LoginForm extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        errorMessage: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    //log in handle function to set to session storage
    logInUser = evt => {
        let errorMessage = ""
        evt.preventDefault();
        this.props.checkLogin(this.state.username, this.state.password).then(user => {
            if (user.length > 0) {
                sessionStorage.setItem("activeUser", user[0].id)
                this.props.mountUponLogin()
                // this.props.getFriendName(user[0].id)
                this.props.history.push("/my-games")
            } else {
                console.log(user)
                errorMessage = "This username and password combination does not exist. Please try again or register!"
                this.setState({
                    errorMessage: errorMessage
                })
            }
        })
    }




    render() {

        return (
            <React.Fragment>
                <div className="login-container">
                    <img src={login} alt="login" className="login"></img>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-login" id="username" placeholder="Enter username" onChange={this.handleFieldChange} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-login" id="password" placeholder="Password" onChange={this.handleFieldChange} />
                        </div>
                        <button type="submit" className="btn" onClick={this.logInUser}>Submit</button>
                        {/* <button className="register-button" onClick={() => { this.props.history.push("/register") }}>Register</button> */}
                    </form>
                    <h4>{this.state.errorMessage}</h4>
                </div>
            </React.Fragment>

        )
    }
}