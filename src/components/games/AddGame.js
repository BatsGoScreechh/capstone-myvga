import React, { Component } from "react";
import "./Game.css"

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
            userId: sessionStorage.getItem("activeUser")
        };

        this.props.addGame(game)
        window.alert("Game successfully added to library.")
        this.setState({
            title: "",
            genreId: "",
            platformId: ""
        })
    }

    render() {
        return (
            <React.Fragment>
                <div id="library-container-left">
                    <div className="section-title" id="section-title">
                        <h1>Add New Game</h1>
                    </div>
                    <div className="add-game-container">
                        {/* Game Title */}
                        <input
                            type="text"
                            required
                            className="game"
                            onChange={this.handleFieldChange}
                            id="title"
                            placeholder="Enter Title"
                        />
                        {/* Game Genre */}
                        < select
                            defaultValue=""
                            name="genre"
                            className="game"
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
                            className="game"
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
                            className="btn"
                            onClick={this.constructNewGame}
                        >
                            Add Game
                    </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}