import React, { Component } from "react";
import ChatList from "./ChatList";
import ChatUserList from "./ChatUserList"
// import ChatUserLibrary from "./ChatUserLibrary"
import "./Chat.css"
export default class Chat extends Component {
    render() {
        console.log(this.state)

        return (
            <React.Fragment>
                <div id="library-body">
                    <ChatList
                        {...this.props}
                        addMessage={this.props.addMessage}
                        messages={this.props.messages}

                    />
                    <div id="user-body">
                        <ChatUserList
                            {...this.props}
                            users={this.props.users}
                            platforms={this.props.platforms}
                            genres={this.props.genres}
                            games={this.props.games}
                            allGames={this.props.allGames}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}