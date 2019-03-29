import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class GameList extends Component {
    state = {
        title: "",
        genreId: "",
        platformId: "",
        matchingGames: [],
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
            title: this.state.title,
            genreId: parseInt(this.state.genreId),
            platformId: parseInt(this.state.platformId),
            // userId: this.state.userId
        };

        this.props
            .addGame(game)
        window.location.reload(true);
    }

    constructEditGame = evt => {
        evt.preventDefault();
        if (this.state.message === "") {
            window.alert("Cannot leave blank");
        } else {
            const editedGame = {
                title: this.state.title,
                genreId: parseInt(this.state.genreId),
                platformId: parseInt(this.state.platformId),
                userId: sessionStorage.getItem("credentials")
                // Make sure the employeeId is saved to the database as a number since it is a foreign key.

            };

            this.props.updateGame(editedGame)
                .then(() => window.location.reload(true)
                    .then(this.setState({
                        title: "",
                        genreId: "",
                        platformId: "",
                    })
                    )
                )
        }
    };

    filterGame = (pId) => {
        let matchingGames = this.props.games.filter(game => game.platform.id === pId)
        this.setState({
            matchingGames: matchingGames
        })

    }

    editForm = () => {
        return (
            <div className="library-table">
                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="edit-title"
                    placeholder="Enter Game Title"
                />

            </div>
        )
    }


    render() {
        console.log(this.state)

        if (this.state.matchingGames.length === 0) {
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
                            placeholder="Enter Game Title"
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
                            onClick={
                                this.constructNewGame
                            }
                        >
                            Add Game
                    </button>
                    </section>
                    {/* My Games Library */}
                    <section className="games">
                        <h1 htmlFor="Game">My Game Library</h1>
                        {this.props.platforms.map(p => (

                            <nav className="navbar">

                                <button type="button" className="navbar-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</button>

                            </nav>
                        ))}
                        {


                            // console.log(this.props)
                            <div className="card">
                                <div className="card-body">
                                    <div className="library-table">
                                        <p className="no-games-message">Welcome to MyVGA.</p>
                                    </div>



                                </div>
                            </div>

                        }
                    </section>
                </form>
            )

        } else if (this.state.matchingGames.length >= 1) {
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
                            onClick={
                                this.constructNewGame
                            }
                        >
                            Add Game
                    </button>
                    </section>
                    {/* My Games Library */}
                    <section className="games">
                        <h1 htmlFor="Game">My Game Library</h1>
                        {this.props.platforms.map(p => (

                            <nav className="navbar">

                                <button type="button" className="navbar-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</button>

                            </nav>
                        ))}
                        {

                            this.state.matchingGames.map(game =>

                                // console.log(this.props)
                                <div key={game.id} className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <ul className="library-table">
                                                <li key={game.id} className="game-table">{game.title}</li>
                                                <li key={game.genreId} className="genre-table">
                                                    {game.genre.name}</li>
                                            </ul>
                                            <div className="button-table">
                                                <button className="edit-button"
                                                    onClick={() => {
                                                        this.editForm()
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
                                            </div>

                                        </h5>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                </form>
            )
        } else {
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

                                <button type="button" className="navbar-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</button>

                            </nav>
                        ))}
                        {


                            // console.log(this.props)
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <div className="library-table">
                                            <p className="game-name">There are no games in your library listed under this platform.</p>
                                        </div>



                                    </h5>
                                </div>
                            </div>

                        }
                    </section>
                </form>
            )
        }
    }
}