import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import UserAPIManager from "../modules/UserManager"
import GameAPIManager from "../modules/GameManager"
import GenreAPIManager from "../modules/GenreManager"
import FriendAPIManager from "../modules/FriendManager"
import PlatformAPIManager from "../modules/PlatformManager"
import Game from "./games/Game"
import Register from "./authentication/RegisterForm"
import Login from "./authentication/Login"
import Friend from "./friends/Friend"


export default class ApplicationViews extends Component {

    state = {
        users: [],
        games: [],
        genres: [],
        platforms: [],
        friends: [],
        activeUser: sessionStorage.getItem("activeUser"),
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

    //** Friends Function **//

    addNewFriend = (friendObject) => {
        return FriendAPIManager.addNewFriend(friendObject)
            .then(FriendAPIManager.getAllFriends)
            .then(friends => {
                this.setState({ friends: friends })
                // this.buildFriendArray(friends, this.state.users)
            })
    }

    deleteFriend = (id) => {
        return FriendAPIManager.deleteFriend(id)
            .then(FriendAPIManager.getAllFriends)
            .then(friends => {
                this.setState({ friends: friends })
                // this.buildFriendArray(friends, this.state.users)
            })
    }

    //       buildFriendArray = (friends, users) => {
    //     const activeUser = parseInt(sessionStorage.getItem("activeUser"))

    //     // find all the friends when the active user is in the userId place
    //     const filteredbyUser = friends.filter((friend) => {
    //       return friend.userId === activeUser
    //     })

    //     const mappedbyUser = filteredbyUser.map((each) => [each.otherFriendId, each.id])
    //     console.log(mappedbyUser)

    //     // find all the friends when the active user is in the otherFriendId place
    //     const filteredbyFriend = friends.filter((friend) => friend.otherFriendId === activeUser)
    //     const mappedbyFriend = filteredbyFriend.map((each) => [each.userId, each.id])
    //     // console.log(mappedbyFriend)
    //     // Concatenate the arrays together to form one array
    //     const friendArray = mappedbyFriend.concat(mappedbyUser)
    //     console.log(friendArray)
    //     friendArray.forEach(id => {
    //       console.log("id", id)
    //       const friendWithStuff = users.find((user) => user.id === id[0])
    //       // Attach the friendship id to the friend object
    //       friends.friendshipId=id[1]
    //       console.log(friendWithStuff)

    //     })
    //     UserAPIManager.getSingleUser(activeUser)
    //       .then(user => { this.setState({ currentUsername: user.username }) })


    //     // return friendsWithStuff

    //   }

    mountUponLogin = () => {
        const activeUser = sessionStorage.getItem("activeUser")
        this.setState({ activeUser: activeUser })
        const newState = {}




        // Get all info from the API and set state

        UserAPIManager.getAllUsers()
            .then(users => newState.users = users)
            .then(() => GameAPIManager.getAllGames(this.state.activeUser))
            .then(games => newState.games = games)
            .then(() => FriendAPIManager.getAllFriends(this.state.activeUser))
            .then(friends => newState.friends = friends)
            .then(() => GenreAPIManager.getAllGenres())
            .then(genres => newState.genres = genres)
            .then(() => PlatformAPIManager.getAllPlatforms())
            .then(platforms => newState.platforms = platforms)
            .then(() => {
                // this.buildFriendArray(newState.friends, newState.users)
                this.setState(newState)
            })
    }

    componentDidMount() {
        this.mountUponLogin()
    }

    isAuthenticated = () => {
        return sessionStorage.getItem("activeUser") !== null
    }

    // when login/register route is created, the onClick function will be handled here.
    // Set session storage, make api calls to get news/events/chat etc for this user
    // and set the state.





    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <Route
                    exact path="/" render={props => {
                        return <Login {...props}
                            users={this.state.users}
                            checkEmail={this.checkEmail}
                            checkName={this.checkName}
                            addUser={this.addUser}
                            mountUponLogin={this.mountUponLogin}
                            checkLogin={this.checkLogin}
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
                            return <Redirect to="/" />
                        }
                    }} />

                <Route
                    path="/friends" render={props => {
                        if (this.isAuthenticated()) {
                            return <Friend {...props}
                                activeUser={this.state.activeUser}
                                users={this.state.users}
                                addNewFriend={this.addNewFriend}
                                friends={this.state.friends}
                            />
                        } else {
                            return <Redirect to="/" />
                        }

                    }} />


            </React.Fragment>
        );
    }
}