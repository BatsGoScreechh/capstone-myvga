import React, { Component } from "react"
import GameAPIManager from "../../modules/GameManager"
import "./Chat.css"

export default class ChatUserList extends Component {


    //VERSION 2.0: INCLUDE USER SEARCH BAR AND/OR FRIENDS
    state = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        matchingGames: [],
        key: "",
        filterText: "",
    }

    //************ */Trying to get target id//
    filterGame = (e) => {
        let matchingGames = this.props.allGames.filter(game => game.userId == e)
        this.setState({
            matchingGames: matchingGames
        })
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    render() {
        return (
            <React.Fragment>
                <div className="chat-div">
                    <h1>Users</h1>
                    <div className="users">
                        {this.props.users.map(user => {

                            return <ul>
                                <li>
                                    <p className="user-link" onClick={(e) => this.filterGame(e.target.id)} id={user.id}>{user.username}</p>

                                </li>
                            </ul>

                        })}


                        {/* <input
                            type="text"
                            placeholder="Search..."
                            // value={this.state.filterText}
                            ref="filterTextInput"
                            onChange={this.handleFieldChange}
                        /> */}
                    </div>
                </div>
                <h2>User's Library</h2>
                {

                    this.state.matchingGames.map(game => {
                        return (
                            <div className="other-user-library">
                                <div className="user-library-div">
                                    <ul>
                                        <li key={game.id}>{game.title}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}

            </React.Fragment>
        )
    }
}
