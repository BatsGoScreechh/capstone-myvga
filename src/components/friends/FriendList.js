import React, { Component } from "react"
// import "./Friends.css"
import AuthenticationAPIManager from "../../modules/FriendAuthentication"
import FriendAPIManager from "../../modules/FriendManager"
import UserAPIManager from "../../modules/UserManager"

export default class FriendList extends Component {



    state = {
        userId: parseInt(this.props.userId),
        addNewFriend: this.props.addNewFriend,
        // friendsWithStuff: "",
        // testState: [],
        friendToAdd: "",
        errorStatement: "",
        // friends: [],
        // otherFriendId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    // componentDidMount = () => {
    //     let key = this.state.key
    //     FriendAPIManager.getSingleFriend(key).then(game => {
    //         this.setState({
    //             title: game.title,
    //             genreId: game.genreId,
    //             platformId: game.platformId
    //         });
    //     });
    // }

    // Builds form as an object
    AuthenticateFriend = (userId, friendToAdd, otherFriendId) => {
        UserAPIManager.checkName(this.state.friendToAdd).then(user => {
            //const returned = AuthenticationAPIManager(user, userId, friendToAdd, otherFriendId)
console.log(friendToAdd)
            if (user.length === 0) {
                this.setState({ errorStatement: "No user with that name" })
            }
            else {
                const newFriend = {
                    userId: parseInt(sessionStorage.getItem("activeUser")),
                    otherFriendId: user[0].id
                }
                this.props.addNewFriend(newFriend)
                console.log(user, "NEW FRIEND")
                this.setState({ errorStatement: "" })
                this.props.history.push("/friends")
            }

        }
        )
    }
    // constructNewRelationship = evt => {
    //     evt.preventDefault();
    //     const friend = {
    //         activeUser: sessionStorage.getItem("credentials"),
    //         otherFriendId: parseInt(this.state.friends.otherFriendId),
    //     };

    //     this.props
    //         .addFriend(friend)
    //     window.alert("Friend successfully added.")
    //     window.location.reload(true);
    // }

    render() {

        return (
            <React.Fragment>
                <section className="friendsSection">
                    <h1>Friends</h1>
                    <div className="friends-list">
                        {this.props.users.map(friend => (
                            <ul className="library-list">
                                <li key={friend.otherFriendId} className="friend-table">{friend.otherFriendId}</li>
                            </ul>
                        ))}
                    </div>
                    <input
                        id="friendToAdd"
                        type="text"
                        placeholder="Enter Username"
                        onChange={this.handleFieldChange}></input>
                    <button className="add-friend"
                        onClick={() =>
                            // console.log(this.state)
                            this.AuthenticateFriend(this.state.addFriend, this.props.userId, this.props.otherFriendId)

                            // this.AuthenticateFriend
                        }
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