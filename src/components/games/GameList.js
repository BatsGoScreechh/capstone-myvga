import React, { Component } from "react";

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

        // Create the animal and redirect user to animal list
        this.props
            .addGame(game)
        this.props.history.push("/my-games");
    }

    render() {
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
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Enter Title"
                    />
                    {/* Game Platform */}
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Enter Title"
                    />
                    <button type="new-button"
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
                    {
                        this.props.games.map(game =>
                            <div key={game.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <p className="newNote">{game.title}</p>
                                        <button className="card-link btn btn-primary"
                                            onClick={() => {
                                                this.props.history.push(`/notes/${note.id}/edit`);
                                            }}>Edit</button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => {
                                                this.props.deleteNote(note.id)
                                                this.props.history.push(`/notes`);
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