import React, { Component } from "react"
import GameAPIManager from "../../modules/GameManager"
import "./Chat.css"

export default class ChatUserList extends Component {


    state = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        matchingGames: [],
        key: "",
        filterText: "",
    }

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
                <div className="user-div">
                    <h1>Users</h1>
                    <div className="users">
                        {this.props.users.map(user => {
                            return <p className="user-link" onClick={(e) => this.filterGame(e.target.id)} id={user.id}>{user.username}</p>
                        })}
                    </div>
                </div>
                <h1>User's Library</h1>
                <div className="other-user-library">
                    {this.state.matchingGames.map(game => {
                        return (
                            <div className="user-library-div">
                                <p key={game.id} id="game-title">{game.title}</p>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}
