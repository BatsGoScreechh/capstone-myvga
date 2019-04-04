import React, { Component } from "react"
// import "./Friends.css"
import FriendAPIManager from "../../modules/FriendManager"
import UserAPIManager from "../../modules/UserManager"

export default class FriendList extends Component {

    state = {
        activeUser: parseInt(this.props.activeUser),
        friendsWithStuff: "",
        testState: [],
        addFriend: "",
        errorStatement: "",
        friends: []

    }

    //Builds form as an object
    // constructNewRelationship = evt => {
    //     evt.preventDefault();
    //     const friend = {
    //         userId: 1,
    //         otherFriendId: 2,
    //     };

    //     this.props
    //         .addFriend(friend)
    //         window.alert("Friend successfully added.")
    //     window.location.reload(true);
    // }

    render() {

        return (
            <React.Fragment>
                <section className="friendsSection">
                    <h1>Friends</h1>
                    <input
                        id="addFriend"
                        type="text"
                        placeholder="enter username"
                        onChange={this.handleFieldChange}></input>
                    <button className="btn btn-add-friend btn-secondary"
                        onClick={() => {
                            this.AuthenticateFriend(this.state.addFriend, this.props.currentUsername, this.props.friendsWithStuff)
                        }}

                    >
                        Add a Friend</button>
                    <span className="errorStatement">{this.state.errorStatement}</span>
                    <div className="friendList">
                        {this.props.friends.map((friend) =>
                            <div key={friend.id} className="friendCard">
                                <div className="card">
                                    <div className="card-title">

                                        <span className="friendName">{friend.username}</span><button className="btn-sm btn-del-friend btn-danger"
                                            onClick={() => {
                                                // need to figure out friendship ID!!
                                                // this.props.deleteFriend(friend.friendshipId)
                                                // this.props.history.push("/friends")
                                            }}>Delete Friend</button>


                                    </div>
                                </div>
                            </div>


                        )}</div>

                </section>
            </React.Fragment>
        )

    }

}