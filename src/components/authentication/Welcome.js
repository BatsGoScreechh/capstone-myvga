import React, { Component } from "react";

export default class Welcome extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="welcome-body">
                    <div className="welcome-message">
                        Welcome to My Video Game Athenaeum!
                    </div>
                    <button type="login" className="btn" onClick={() => { this.props.history.push("/login") }}>Login</button>

                    <button type="register" className="btn" onClick={() => { this.props.history.push("/register") }}>Register</button>

                </div>
            </React.Fragment>
        )
    }



}
