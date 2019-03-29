import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class GameList extends Component {
    state = {
        game: "",
        genre: "",
        platform: "",
        userId: parseInt(sessionStorage.getItem("activeUser"))
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
       */
    constructNewGame = evt => {
        evt.preventDefault();
        const game = {
            title: this.state.game,
            genre: this.state.genre,
            platform: this.state.platform,
            userId: this.state.userId
        };

        this.props
            .addGame(game)
        this.props.history.push("/my-games");
    }

    // filterGame = evt => {
    //     if (this.props.match.params.platformId === this.props.platforms.id) {

    //     }
    // }


    render() {
        // const platform = this.props.platforms.id
        // const result = this.props.games.filter(result => result.platformId === this.props.match.params.platformId)
        console.log(this.props)
        return (
            <form className="game-form">
                {/* Add New Game Section */}
                <section className="new-game-section">
                    <h1 htmlFor="Game">Add New Game</h1>
                    {/* Game Title */}
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Enter Title"
                    />
                    {/* Game Genre */}
                    <select
                        defaultValue=""
                        name="genre"
                        id="genreId"
                        onChange={this.handleFieldChange}
                    >
                        <option value="">Select Genre</option>
                        {this.props.genres.map(g => (
                            <option key={g.id} id={g.id} value={g.id}>
                                {g.name}
                            </option>
                        ))}
                    </select>
                    {/* Game Platform */}
                    <select
                        defaultValue=""
                        name="platform"
                        id="platformId"
                        onChange={this.handleFieldChange}
                    >
                        <option value="">Select Platform</option>
                        {this.props.platforms.map(p => (
                            <option key={p.id} id={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                    <button type="button"
                        className="submit-game-button"
                        onClick={() => {
                            // Determine onClick status
                        }
                        }>
                        Add Game
                    </button>
                </section>
                {/* My Games Library */}
                <section className="games">
                    <h1 htmlFor="Game">My Game Library</h1>
                    {this.props.platforms.map(p => (

                        <nav className="navbar">
                            <ul className="nav-unordered-list">
                                <li className="nav-item">

                                    <Link className="nav-link" to={`/my-games/${p.id}`}>{p.name}</Link>
                                </li>


                            </ul>
                        </nav>
                    ))}
                    {
                        this.props.games.map(game =>
                            // console.log(this.props)
                            <div key={game.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <div className="library-table">
                                            <p className="game-name">{game.title}</p>
                                            <p className="game-genre">{game.genre.name}</p>
                                        </div>
                                        <button className="edit-button"
                                            onClick={() => {
                                                // Determine onClick status
                                            }}>Edit</button>
                                        <button
                                            type="button"
                                            className="delete-button"
                                            onClick={() => {
                                                this.props.deleteGame(game.id)
                                                this.props.history.push(`/my-games`);
                                            }}
                                        >
                                            Delete
</button>


                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
            </form>
        )

    }
}