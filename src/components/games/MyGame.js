import React, { Component } from "react";
import AddGame from "./AddGame";
// import ChatEdit from "../chat/chatEdit";
import GameList from "../games/GameList";

export default class MyGame extends Component {
  render() {
    console.log(this.props)
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