import React, { Component } from "react";
import "./Welcome.css"
import logo from "./myvgalogo4.png"
import login from "./login.png"
import register from "./register.png"
import title from "./title.png"
// import pillar from "./pillar.png"
export default class Welcome extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="welcome">

                    <div className="welcome-body">

                        <div className="welcome-logo">
                            <img src={title} alt="title" id="title"></img>

                            {/* <div className="welcome-message">
                            Welcome to My Video Game Athenaeum!
                    </div> */}

                            <img src={logo} alt="logo" id="logo"></img>
                        <div className="welcome-btn-container">
                            <img src={login} type="login" className="btn" onClick={() => { this.props.history.push("/login") }}></img>
                            <br></br>
                            <img src={register} type="register" className="btn" onClick={() => { this.props.history.push("/register") }}></img>
                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment >
        )
    }



}
