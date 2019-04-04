import React, { Component } from "react";
import GameAPIManager from '../../modules/GameManager'
// import GameNav from "./GameNav"

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
                <div className="game-div">
                    {/* My Games Library */}
                    <section className="games">
                        <h1 htmlFor="Game">My Game Library</h1>
                        {this.props.platforms.map(p => (
                            <nav className="navbar">
                                <button type="button" className="navbar-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</button>
                            </nav>
                        ))}
                        {
                            <div className="library-table" id="library">
                                <p className="no-games-message">Welcome to MyVGA.</p>
                            </div>
                        }
                    </section>
                </div>
            )
        } else if (this.state.matchingGames.length >= 1) {
            return (
                <div className="game-div">
                    {/* My Games Library */}
                    <section className="games">
                        <h1 htmlFor="Game">My Game Library</h1>
                        {this.props.platforms.map(p => (
                            <nav className="navbar">
                                <button type="button" className="navbar-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</button>
                            </nav>
                        ))}
                        {
                            this.state.matchingGames.map(game => {
                                if (this.state.gameToEdit.id === game.id) {
                                    return <div className="library-entry" id="entry" key={game.id}>
                                        <div className="form-group">
                                            <label htmlFor="edit-game"></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={this.handleFieldChange}
                                                id="title"
                                                defaultValue={game.title}
                                            />
                                            < select
                                                defaultValue={game.genreId}
                                                name="genre"
                                                id="genreId"
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
                                                onChange={this.handleFieldChange}>
                                                <option value="">{game.platform.name}</option>
                                                {this.props.platforms.map(p => (
                                                    <option key={p.id} id={p.id} value={p.id}>
                                                        {p.name}
                                                    </option>
                                                ))}
                                            </select >
                                            <button
                                                type="submit"
                                                onClick={this.constructEditGame}
                                                className="submit-game-button">Submit</button>
                                        </div>
                                    </div>
                                } else {
                                    return <div className="library-table" id="library">
                                        <div className="library-entry" id="entry" key={game.id}>
                                            <ul className="library-list">
                                                <li key={game.id} className="game-table">{game.title}</li>
                                                <li key={game.genreId} className="genre-table">
                                                    {game.genre.name}</li>
                                            </ul>
                                            <div className="button-table">
                                                <button className="edit-button" id={game.id}
                                                    onClick={() => {
                                                        this.setState({
                                                            gameToEdit: game,
                                                            key: game.id
                                                        })
                                                    }}
                                                > Edit</button>
                                                <button
                                                    type="button"
                                                    className="delete-button"
                                                    onClick={() => {
                                                        this.props.deleteGame(game.id)
                                                        window.alert("Game successfully deleted from library.")
                                                        window.location.reload(true)
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            }
                            )
                        }
                    </section>
                </div>
            )
        }
    }
}