import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import UserAPIManager from "../modules/UserManager"
import GameAPIManager from "../modules/GameManager"
import GenreAPIManager from "../modules/GenreManager"
import PlatformAPIManager from "../modules/PlatformManager"
import GameList from "./games/GameList"




export default class ApplicationViews extends Component {

    state = {
        users: [],
        games: [],
        genres: [],
        platforms: [],
        friends: [],
        messages: [],
    }

    //User Functions//
    // addUser = user =>
    //     UserAPIManager.addNewUser(user)
    //         .then(() => UserAPIManager.getAllUsers(this.state.activeUser))
    //         .then(users =>
    //             this.setState({
    //                 users: users
    //             })
    //         );

    //Game Functions//
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


    mountUponLogin = () => {
        const activeUser = sessionStorage.getItem("activeUser")
        this.setState({ activeUser: activeUser })
        const newState = {}

        // Get all info from the API and set state

        UserAPIManager.getAllUsers()
            .then(users => newState.users = users)
            .then(() => GameAPIManager.getAllGames(this.state.activeUser))
            .then(games => newState.games = games)
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
        return (
            <React.Fragment>

                <Route
                    exact path="/my-games" render={props => {
                        // if (this.isAuthenticated()) {
                        return <GameList {...props}
                            games={this.state.games}
                            genres={this.state.genres}
                            platforms={this.state.platforms}
                            addGame={this.addGame}
                            updateGame={this.editGame}
                            deleteGame={this.deleteGame} />
                    }
                        // else {
                        //     return <Redirect to="/login" />
                        // }
                    } />

                {/* <Route path="/my-games/:platformId(\d+)" render={(props) => {
                    return <GameDetail {...props}
                        games={this.state.games}
                        genres={this.state.genres}
                        platforms={this.state.platforms}
                        addGame={this.addGame}
                        editGame={this.editGame}
                        deleteGame={this.deleteGame} />
                }} /> */}
                {/* <Route
                    path="/news/new" render={props => {
                        if (this.isAuthenticated()) {
                            return <NewsForm {...props}
                                news={this.state.news}
                                addNewArticle={this.addNewArticle}
                                activeUser={this.state.activeUser}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }

                    }} />
                <Route
                    path="/news/:newsId(\d+)/edit" render={props => {
                        if (this.isAuthenticated()) {
                            return <NewsEditForm {...props}
                                news={this.state.news}
                                editArticle={this.editArticle}
                                activeUser={this.state.activeUser}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }

                    }} />


                <Route
                    exact path="/events" render={props => {
                        if (this.isAuthenticated()) {
                            return <EventList {...props} events={this.state.events} deleteEvent={this.deleteEvent} />
                        } else {
                            return <Redirect to="/login" />
                        }

                    }}
                />
                <Route
                    path="/events/new" render={props => {
                        if (this.isAuthenticated()) {
                            return <EventForm  {...props} events={this.state.events} addEvent={this.addEvent} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }}
                />
                <Route
                    path="/events/:eventId(\d+)/edit" render={props => {
                        if (this.isAuthenticated()) {
                            return <EventEditForm  {...props} events={this.state.events} updateEvent={this.updateEvent} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }}
                />


                <Route
                    path="/friends" render={props => {
                        if (this.isAuthenticated()) {
                            return <FriendList {...props}
                                friends={this.state.friends}
                                activeUser={this.state.activeUser}
                                users={this.state.users}
                                friendsWithStuff={this.state.friendsWithStuff}
                                getFriendsWithStuff={this.getFriendsWithStuff}
                                buildFriendArray={this.buildFriendArray}
                                checkUsername={this.checkUserName}
                                currentUsername={this.state.currentUsername}
                                addNewFriend={this.addNewFriend}
                                deleteFriend={this.deleteFriend} />
                        }
                        else {
                            return <Redirect to="/login" />
                        }
                    }}
                />

                <Route
                    exact path="/notes" render={props => {
                        if (this.isAuthenticated()) {

                            return <NoteList {...props}
                                deleteNote={this.deleteNote}
                                addNote={this.addNote}
                                notes={this.state.notes}

                            />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }}
                />



                <Route exact path="/notes/new" render={(props) => {
                    if (this.isAuthenticated()) {

                        return <NoteForm {...props}
                            addNote={this.addNote}
                            notes={this.state.notes}

                        />
                    } else {
                        return <Redirect to="/login" />
                    }

                }} />
                <Route
                    exact path="/notes/:noteId(\d+)/edit" render={props => {
                        if (this.isAuthenticated()) {
                            return <NoteEditForm  {...props} notes={this.state.notes} updateNote={this.updateNote} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }}
                />

                <Route
                    path="/messages" render={props => {
                        if (this.isAuthenticated()) {
                            return <MessageList {...props}
                                activeUser={this.state.activeUser}
                                messages={this.state.messages}
                                deleteMessage={this.deleteMessage}
                                addNewMessage={this.addNewMessage}
                                editMessage={this.editMessage}
                                addNewFriend={this.addNewFriend}
                                friendsWithStuff={this.state.friendsWithStuff}
                                currentUsername={this.state.currentUsername} />

                        } else {
                            return <Redirect to="/login" />
                        }


                    }}
                />

                <Route
                    exact path="/tasks" render={props => {
                        if (this.isAuthenticated()) {
                            return (
                                <TaskList {...props} tasks={this.state.tasks} addTask={this.addTask} completeTask={this.completeTask} />
                            )
                        } else {
                            return <Redirect to="/login" />
                        }


                    }}
                />

                <Route path="/tasks/:taskId(\d+)/edit" render={props => {
                    if (this.isAuthenticated()) {
                        return (
                            <TaskEditForm {...props} tasks={this.state.tasks} updateTask={this.updateTask} />
                        )
                    } else {
                        return <Redirect to="/login" />
                    }

                }} />

                <Route exact path="/tasks/new" render={props => {
                    if (this.isAuthenticated()) {
                        return (
                            <TaskForm {...props} tasks={this.state.tasks} addTask={this.addTask} />
                        )
                    } else {
                        return <Redirect to="/login" />
                    }

                }} />

                <Route path="/register" render={props => {
                    return (
                        <RegisterForm {...props} users={this.state.users} checkUserEmail={this.checkUserEmail} checkUserName={this.checkUserName}
                            addUser={this.addUser} mountUponLogin={this.mountUponLogin} />
                    )
                }} />

                <Route exact path="/login" render={props => {
                    return (
                        <LoginForm {...props} checkUserName={this.checkUserName} loginCheck={this.loginCheck} checkUserEmail={this.checkUserEmail} users={this.state.users} mountUponLogin={this.mountUponLogin} />
                    )
                }} />

                <Route path="/tasks/new" render={props => {
                    return (
                        <NewModalForm {...props} tasks={this.state.tasks} />
                    )
                }} /> */}

            </React.Fragment>
        );
    }
}