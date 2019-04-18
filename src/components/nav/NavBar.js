import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


class NavBar extends Component {


    isAuthenticated = () => sessionStorage.getItem("userId") !== null


    render() {
        return (
            <nav className="navbar">
                <ul className="nav-unordered-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-games">My Games</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/chat">Chat</Link>
                    </li>
                    <li className=
                        "nav-item">
                        <Link className="nav-link" to="/" onClick={this.props.handleLogout}>Log Out</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default NavBar