import { Route } from "react-router-dom";
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import mygames from "./mygames.png"
import chat from "./chat.png"
import logout from "./logout.png"
class NavBar extends Component {

    isAuthenticated = () => sessionStorage.getItem("activeUser") !== null


    render() {
        if (this.isAuthenticated())
        {
            return (
                <div className="nav-body">
                <nav className="navbar">
                    <ul className="nav-unordered-list">
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-games"><img src={mygames} alt="My Games"></img></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chat"><img src={chat} alt="Chat"></img></Link>
                        </li>
                        <li className=
                            "nav-item">
                            <Link className="nav-link" to="/" onClick={this.props.handleLogout}><img src={logout} alt="Logout"></img></Link>
                        </li>

                    </ul>
                </nav>
                </div>
            )
        } else {
            return null;

        }
    }
}

export default NavBar