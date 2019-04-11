import React, { Component } from "react";
import AddGame from "./AddGame";
import GameList from "./GameList";
// import GameNav from "./GameNav"
export default class Game extends Component {
  render() {
    return (
      <React.Fragment>
         {/* <GameNav
            {...this.props}
            platforms={this.props.platforms}
            games={this.props.games}
          /> */}
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