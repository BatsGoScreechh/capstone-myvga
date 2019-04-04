import React, { Component } from "react";



export default class AddGame extends Component {



    state = {
        title: "",
        genreId: "",
        platformId: "",
        userId: parseInt(sessionStorage.getItem("activeUser"))
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    //Builds form as an object
    constructNewGame = evt => {
        evt.preventDefault();
        const game = {
            title: this.state.title,
            genreId: parseInt(this.state.genreId),
            platformId: parseInt(this.state.platformId),
            userId: this.state.userId
        };

        this.props
            .addGame(game)
            window.alert("Game successfully added to library.")
        window.location.reload(true);
    }

    render() {
        return (
            <React.Fragment>
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
                < select
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
                </select >
                {/* Game Platform */}
                < select
                    defaultValue=""
                    name="platform"
                    id="platformId"
                    onChange={this.handleFieldChange}
                >
                    <option value="">Select Platform</option>
                    {
                        this.props.platforms.map(p => (
                            <option key={p.id} id={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))
                    }
                </select >
                <button type="button"
                    className="submit-game-button"
                    onClick={this.constructNewGame}
                >
                    Add Game
                    </button>
            </React.Fragment>
        )
    }
}