import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import UserAPIManager from "../modules/UserManager"
import GameAPIManager from "../modules/GameManager"
import GenreAPIManager from "../modules/GenreManager"
import PlatformAPIManager from "../modules/PlatformManager"
import ChatAPIManager from "../modules/ChatManager"
import Game from "./games/Game"
import RegisterForm from "./authentication/RegisterForm"
import Login from "./authentication/Login"
import Welcome from "./authentication/Welcome"
import Chat from "./chat/Chat"

export default class ApplicationViews extends Component {


    state = {
        users: [],
        games: [],
        genres: [],
        platforms: [],
        friends: [],
        friendId: "",
        username: "",
        activeUser: sessionStorage.getItem("activeUser"),
        friendArray: [],
        messages: [],
        allGames: []
    }

    //** Game Functions **//
    addGame = (game) => {
        GameAPIManager.addNewGame(game)
            .then(() => GameAPIManager.getAllGames(this.state.activeUser))
            .then(games => this.setState({
                games: games
            }
            ))
    }

    deleteGame = (id) => {
        GameAPIManager.deleteGame(id)
            .then(() => GameAPIManager.getAllGames(this.state.activeUser))
            .then(games => this.setState({
                games: games
            })
            )
    }


    updateGame = editedGameObject => {
        return GameAPIManager.updateGame(editedGameObject)
            .then(() => GameAPIManager.getAllGames(this.state.activeUser))
            .then(games => this.setState({
                games: games
            }))
    }

    //** Login/Register Functions **//
    checkEmail = (email) => {
        return UserAPIManager.checkEmail(email)
    }

    checkName = (username) => {
        return UserAPIManager.checkName(username)
    }

    addUser = (userObject) => {
        return UserAPIManager.addNewUser(userObject)
    }

    checkLogin = (username, password) => {
        return UserAPIManager.checkNameAndPassword(username, password)
    }

    //** Chat Functions **/

    addMessage = (message) => {
        ChatAPIManager.addMessage(message)
            .then(() => ChatAPIManager.getAllMessages())
            .then(messages => this.setState({
                messages: messages
            }
            ))
    }

    mountUponLogin = () => {
        const activeUser = sessionStorage.getItem("activeUser")
        this.setState({ activeUser: activeUser })
        const newState = {}




        // Get all info from the API and set state

        UserAPIManager.getAllUsers()
            .then(users => newState.users = users)
            .then(() => GameAPIManager.getAllGames(this.state.activeUser))
            .then(games => newState.games = games)
            // .then(() => FriendAPIManager.getAllFriends(this.state.activeUser))
            // .then(friends => newState.friends = friends)
            .then(() => GenreAPIManager.getAllGenres())
            .then(genres => newState.genres = genres)
            .then(() => PlatformAPIManager.getAllPlatforms())
            .then(platforms => newState.platforms = platforms)
            .then(() => ChatAPIManager.getAllMessages())
            .then(messages => newState.messages=messages)
            .then(() => GameAPIManager.getGames())
            .then(allGames => newState.allGames=allGames)
            .then(() => {
                this.setState(newState)
            })
    }

    componentDidMount() {
        this.mountUponLogin()
    }

    isAuthenticated = () => {
        return sessionStorage.getItem("activeUser") !== null
    }



    render() {

        console.log(this.state)
        return (
            <React.Fragment>
                <Route
                    exact path="/" render={(props) => {
                        return <Welcome {...props}
                        />
                    }
                    } />

                <Route
                    exact path="/login" render={props => {
                        return <Login {...props}
                            users={this.state.users}
                            checkEmail={this.checkEmail}
                            checkName={this.checkName}
                            addUser={this.addUser}
                            mountUponLogin={this.mountUponLogin}
                            checkLogin={this.checkLogin}
                            getFriendName={this.getFriendName}
                        />
                    }
                    } />

                <Route
                    exact path="/register" render={props => {
                        return <RegisterForm {...props}
                            users={this.state.users}
                            checkEmail={this.checkEmail}
                            checkName={this.checkName}
                            addUser={this.addUser}
                            mountUponLogin={this.mountUponLogin}
                        />
                    }
                    } />

                <Route
                    exact path="/my-games" render={props => {
                        if (this.isAuthenticated()) {
                            return <Game {...props}
                                games={this.state.games}
                                genres={this.state.genres}
                                platforms={this.state.platforms}
                                addGame={this.addGame}
                                updateGame={this.updateGame}
                                deleteGame={this.deleteGame}
                            />
                        }
                        else {
                            return <Redirect to="/" />
                        }
                    }} />

                <Route
                    exact path="/chat" render={props => {
                        if (this.isAuthenticated()) {
                            return <Chat {...props}
                                games={this.state.games}
                                genres={this.state.genres}
                                platforms={this.state.platforms}
                                messages={this.state.messages}
                                addMessage={this.addMessage}
                                users={this.state.users}
                                allGames={this.state.allGames}
                            />
                        }
                        else {
                            return <Redirect to="/" />
                        }
                    }} />

            </React.Fragment>
        );
    }
}