import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import UserAPIManager from "../modules/UserManager"
import GameAPIManager from "../modules/GameManager"
import GenreAPIManager from "../modules/GenreManager"
// import FriendAPIManager from "../modules/FriendManager"
import PlatformAPIManager from "../modules/PlatformManager"
import ChatAPIManager from "../modules/ChatManager"
import Game from "./games/Game"
import Register from "./authentication/RegisterForm"
import Login from "./authentication/Login"
// import Friend from "./friends/Friend"
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

    //** Friends Function **//

    // addNewFriend = (friendObject) => {
    //     return FriendAPIManager.addNewFriend(friendObject)
    //         .then(FriendAPIManager.getAllFriends)
    //         .then(friends => {
    //             this.setState({ friends: friends })
    //             // this.buildFriendArray(friends, this.state.users)
    //         })
    // }

    // deleteFriend = (id) => {
    //     return FriendAPIManager.deleteFriend(id)
    //         .then(FriendAPIManager.getAllFriends)
    //         .then(friends => {
    //             this.setState({ friends: friends })
    //         })
    // }

    // getFriendName = (userId) => {
    //     let userArray = []
    //     let friendArray = []
    //     return FriendAPIManager.getFriendsByUser(this.state.activeUser)
    //         .then(() => userArray.concat(this.state.activeUser))
    //         .then(() => FriendAPIManager.getFriendsbyFriend(this.state.activeUser, userId))
    //         .then(() => friendArray.concat(this.state.activeUser, userId))
    //         .then(() => userArray.concat(friendArray))
    //         .then(friendArray => {
    //             this.setState({ fullArray: friendArray })

    //         }
    //         )

    // getFriendName = (userId) => {
    //     let friendUserArray = []
    //     let friendArray = []
    //     let userArray = []
    //     let filteredFriends = []
    //     return FriendAPIManager.getFriendsByUser(this.state.activeUser)
    //         .then((friendsByUser) => {
    //             friendUserArray = friendsByUser.concat(friendUserArray)
    //         })
    //         .then(() => {
    //             return FriendAPIManager.getFriendsbyFriend(userId)
    //         }).then((secondDBCall) => {
    //             friendArray = secondDBCall.concat(friendArray)
    //         }).then(() => {
    //             return UserAPIManager.getAllUsers()
    //         }).then((allUsers) => {
    //             userArray = allUsers.concat(userArray)
    //         })
    //         .then(() => {
    //             this.setState({ friendArray: friendArray })
    //         }).then(() => {
    //             let friendFilterArray = friendUserArray.map(friend => {
    //                 userArray.find(
    //                     a => a.id === parseInt(friend.otherFriendId))
    //                     return friendFilterArray
    //             })
    //         })
    // }



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
                    exact path="/" render={props => {
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
                        return <Register {...props}
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
                            return <Redirect to="/login" />
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
                            return <Redirect to="/login" />
                        }
                    }} />
                {/* <Route
                    path="/friends" render={props => {
                        if (this.isAuthenticated()) {
                            return <Friend {...props}
                                activeUser={this.state.activeUser}
                                users={this.state.users}
                                addNewFriend={this.addNewFriend}
                                friends={this.state.friends}
                                deleteFriend={this.deleteFriend}
                                username={this.state.username}
                                friendId={this.state.friendId}
                                getFriendName={this.getFriendName}
                                fullArray={this.state.fullArray}

                            />
                        } else {
                            return <Redirect to="/" />
                        }

                    }} /> */}


            </React.Fragment>
        );
    }
}