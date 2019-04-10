import React, { Component } from "react";
import FriendList from "./FriendList";
// import FriendLibrary from "./FriendLibrary"
// import GameList from "./GameList";
// import GameNav from "./GameNav"
export default class Friend extends Component {
    render() {
        console.log(this.props)

        return (

            <React.Fragment>

                <FriendList
                    {...this.props}
                    userId={sessionStorage.getItem("activeUser")}
                    users={this.props.users}
                    friendToAdd={this.friendToAdd}
                    friends={this.props.friends}
                    addNewFriend={this.props.addNewFriend}
                    deleteFriend={this.props.deleteFriend}
                    username={this.props.username}
                    friendId={this.props.friendId}
                    getFriendName={this.props.getFriendName}
                    friendArray={this.props.friendArray}


                />
                {/* <FriendLibrary
                    {...this.props}
                    userId={sessionStorage.getItem("activeUser")}
                    users={this.props.users}
                    friendToAdd={this.friendToAdd}
                    friends={this.props.friends}
                    addNewFriend={this.props.addNewFriend}
                /> */}
            </React.Fragment>
        );
    }
}