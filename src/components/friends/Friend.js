import React, { Component } from "react";
import FriendList from "./FriendList";
// import GameList from "./GameList";
// import GameNav from "./GameNav"
export default class Friend extends Component {
    render() {
        return (
            <React.Fragment>

                <FriendList
                    {...this.props}
                    activeUser={sessionStorage.getItem("activeUser")}
                    addNewFriend={this.addNewFriend}
                    friends={this.props.friends}

                />

            </React.Fragment>
        );
    }
}