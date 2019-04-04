import React, { Component } from "react";
import AddGame from "./AddGame";
import GameList from "../games/GameList";
export default class MyGame extends Component {
  render() {
    return (
      <React.Fragment>
          <AddGame
            {...this.props}
            games={this.props.games}
            genres={this.props.genres}
            platforms={this.props.platforms}
            addGame={this.props.addGame}
            updateGame={this.props.updateGame}
            deleteGame={this.props.deleteGame}
          />
          <GameList
            {...this.props}
            games={this.props.games}
            genres={this.props.genres}
            platforms={this.props.platforms}
            addGame={this.props.addGame}
            updateGame={this.props.updateGame}
            deleteGame={this.props.deleteGame}
          />
      </React.Fragment>
    );
  }
}