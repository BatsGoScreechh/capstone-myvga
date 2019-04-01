import React, { Component } from "react";
// import "./note.css"
import GameAPIManager from '../../modules/GameManager'


export default class GameEditForm extends Component {
    // Set initial state
    state = {
        name: "",
        genre: [],
        userId: parseInt(sessionStorage.getItem("activeUser"))
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateCurrentGame = evt => {
        evt.preventDefault();
        const game = {
            id: this.props.match.params.gameId,
            title: this.state.title,
            genreId: parseInt(this.state.genreId),
            platformId: parseInt(this.state.platformId),
        };

        // Create the event and redirect user to event list
        this.props.updateGame(game)
        window.location.reload(true);
    };
    componentDidMount() {
        GameAPIManager.getSingleGame(this.props.match.params.gameId)
            .then(game => {
                this.setState({
                    title: game.title,

                });
            });
    }



    render() {
        return (
            <form>
                <div className="form-group">
                    <h1 htmlFor="formGameInput">Edit Game</h1>
                    <input type="text" className="form-control" id="title" value={this.state.title} onChange={this.handleFieldChange} />
                </div>

                <button type="button" className="btn btn-success"
                    onClick={this.updateCurrentGame}>Submit</button>
            </form>
        )
    }
}