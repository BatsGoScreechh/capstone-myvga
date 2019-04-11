import React, { Component } from "react";
import ChatList from "./ChatList";
import ChatUserList from "./ChatUserList"
import ChatUserLibrary from "./ChatUserLibrary"

export default class Chat extends Component {
    render() {
        console.log(this.state)

        return (
            <React.Fragment>

                {/* <GameNav
            {...this.props}
            platforms={this.props.platforms}
            games={this.props.games}
          /> */}
                <ChatList
                    {...this.props}
                    addMessage={this.props.addMessage}
                    messages={this.props.messages}

                />
                <ChatUserList
                    {...this.props}
                    users={this.props.users}
                    platforms={this.props.platforms}
                    genres={this.props.genres}
                    games={this.props.games}
                    allGames={this.props.allGames}
                />
                {/* <ChatUserLibrary
                    {...this.props}
                    users={this.props.users}
                    platforms={this.props.platforms}
                    genres={this.props.genres}
                    games={this.props.games}
                    showLibrary={this.props.showLibrary}
                /> */}
            </React.Fragment>
        );
    }
}