import React, { Component } from "react";
import GameAPIManager from '../../modules/GameManager'
import "./Game.css"
import logo from "./myvgalogo4.png"

export default class GameList extends Component {

    state = {
        matchingGames: [],
        title: "",
        platformId: "",
        gameToEdit: "",
        key: "",
        userId: parseInt(sessionStorage.getItem("activeUser"))
    };
    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = this.state.gameToEdit;
        stateToChange[evt.target.id] = evt.target.value;
        this.setState({ gameToEdit: stateToChange });
    };

    constructEditGame = evt => {
        evt.preventDefault();
        if (this.state.title === "") {
            window.alert("Cannot leave blank");
        } else {
            const editedGame = {
                id: this.state.key,
                title: this.state.title,
                genreId: parseInt(this.state.genreId),
                platformId: parseInt(this.state.platformId),
                userId: sessionStorage.getItem("credentials")
            };
            this.props.updateGame(editedGame)
                .then(() => this.props.history.push("/my-games"))
                .then(this.setState({
                    gameToEdit: ""
                })
                )
        }
    }

    componentDidMount = () => {
        let key = this.state.key
        GameAPIManager.getSingleGame(key).then(game => {
            this.setState({
                title: game.title,
                genreId: game.genreId,
                platformId: game.platformId
            });
        });
    }

    filterGame = (pId) => {
        let matchingGames = this.props.games.filter(game => game.platform.id === pId)
        this.setState({
            matchingGames: matchingGames
        })
    }

    render() {
        if (this.state.matchingGames.length === 0) {
            return (
                <React.Fragment>
                    {console.log(this.state)}
                    <div id="library-container-right">
                        <h1 className="section-title">My Game Library</h1>
                        <div className="platform-list">
                            {this.props.platforms.map(p => (
                                <ul className="platform-nav">
                                    <li className="filter-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</li>
                                </ul>
                            ))}
                        </div>
                        {
                            <div className="library-table" id="library">
                                <p className="no-games-message"><img src={logo} width="50%" alt="logo"></img></p>
                            </div>
                        }
                    </div>
                </React.Fragment>
            )
        } else if (this.state.matchingGames.length >= 1) {
            return (
                <React.Fragment>
                    <div id="library-container-right">
                        <h1 className="section-title">My Game Library</h1>
                        <div className="platform-list">
                            {this.props.platforms.map(p => (
                                <ul className="platform-nav">
                                    <li className="filter-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</li>
                                </ul>
                            ))}
                        </div>
                        {
                            this.state.matchingGames.map(game => {
                                if (this.state.gameToEdit.id === game.id) {

                                    return (
                                        <React.Fragment>
                                            <div className="library-table">
                                                <div className="library-entry" key={game.id}>
                                                    <div className="edit-form">
                                                        <input
                                                            type="text"
                                                            className="edit-control"
                                                            onChange={this.handleFieldChange}
                                                            id="title"
                                                            defaultValue={game.title}
                                                        />
                                                        < select
                                                            defaultValue={game.genreId}
                                                            name="genre"
                                                            id="genreId"
                                                            className="edit-control"
                                                            onChange={this.handleFieldChange}
                                                        >
                                                            <option value="">{game.genre.name}</option>
                                                            {this.props.genres.map(g => (
                                                                <option key={g.id} id={g.id} value={g.id}>
                                                                    {g.name}
                                                                </option>
                                                            ))
                                                            }
                                                        </select >
                                                        < select
                                                            defaultValue={game.platformId}
                                                            name="platform"
                                                            id="platformId"
                                                            className="edit-control"
                                                            onChange={this.handleFieldChange}>
                                                            <option value="">{game.platform.name}</option>
                                                            {this.props.platforms.map(p => (
                                                                <option key={p.id} id={p.id} value={p.id}>
                                                                    {p.name}
                                                                </option>
                                                            ))}
                                                        </select >
                                                        <p
                                                            type="submit"

                                                            onClick={this.constructEditGame}
                                                            className="edit-submit">Submit</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="section-title">

                                            </div>
                                        </React.Fragment>)
                                } else {
                                    return (
                                        <React.Fragment>
                                            <div className="library-table">
                                                <div className="library-entry" key={game.id}>
                                                    <div className="library-list">
                                                        <p key={game.id} className="game-table">{game.title}</p>
                                                        <p key={game.genreId} className="genre-table">
                                                            {game.genre.name}</p>
                                                    </div>
                                                    <div className="btn-table">
                                                        <p className="library-button" id={game.id}
                                                            onClick={() => {
                                                                this.setState({
                                                                    gameToEdit: game,
                                                                    key: game.id
                                                                })
                                                            }}
                                                        > Edit</p>
                                                        <p
                                                            className="library-button"
                                                            onClick={() => {
                                                                this.props.deleteGame(game.id)
                                                                window.alert("Game successfully deleted from library.")
                                                            }}
                                                        >
                                                            Delete
                                                                     </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>)



                                }
                            }
                            )
                        }
                    </div>
                </React.Fragment>
            )
        }
    }
}