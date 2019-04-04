import React, { Component } from "react";
import RegisterForm from "./RegisterForm";

export default class MyGame extends Component {
    render() {
        return (
            <React.Fragment>
                <RegisterForm
                    users={this.state.games}
                    checkEmail={this.checkEmail}
                    checkName={this.checkName}
                    addUser={this.addUser}
                />
                {/* <GameList
            {...this.props}
            games={this.props.games}
            genres={this.props.genres}
            platforms={this.props.platforms}
            addGame={this.props.addGame}
            updateGame={this.props.updateGame}
            deleteGame={this.props.deleteGame}
          /> */}
            </React.Fragment>
        );
    }
}