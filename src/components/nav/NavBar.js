import React, { Component } from "react"
import { Redirect, Link, Route } from "react-router-dom"


class NavBar extends Component {

    render() {

        return (
            <nav className="navbar">
                <ul className="nav-unordered-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-games">My Games</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    <li className=
                        "nav-item">
                        <Link className="nav-link" to="/login" onClick={this.props.handleLogout}>Log Out</Link>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default NavBar