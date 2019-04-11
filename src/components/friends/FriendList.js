// import React, { Component } from "react"
// // import "./Friends.css"
// import UserAPIManager from "../../modules/UserManager"
// import FriendAPIManager from "../../modules/FriendManager"
// export default class FriendList extends Component {



//     state = {
//         userId: parseInt(this.props.userId),
//         addNewFriend: this.props.addNewFriend,
//         getFriendName: this.props.getFriendName,
//         // friendsWithStuff: "",
//         // testState: [],
//         friendToAdd: "",
//         errorStatement: "",
//         // friends: [],
//         // otherFriendId: ""
//     }

//     handleFieldChange = evt => {
//         const stateToChange = {};
//         stateToChange[evt.target.id] = evt.target.value;
//         this.setState(stateToChange);
//     };

//     // componentDidMount = () => {
//     //     this.props.getFriendName(this.state.friends).then(friend => {
//     //         this.setState({

//     //             otherFriendId: friend.otherFriendId,
//     //             // password: friend.password,
//     //             // platformId: friend.platformId
//     //         });
//     //     });
//     // }

//     // Makes sure friend's username is in database
//     AuthenticateFriend = () => {
//         UserAPIManager.checkName(this.state.friendToAdd).then(user => {
//             if (user.length === 0) {
//                 this.setState({ errorStatement: "No user with that name" })
//             }
//             else {
//                 const newFriend = {
//                     userId: parseInt(sessionStorage.getItem("activeUser")),
//                     otherFriendId: user[0].id
//                 }
//                 this.props.addNewFriend(newFriend)
//                 this.setState({ errorStatement: "" })
//                 this.setState()

//             }

//         }
//         )
//     }

//     // getNameOfFriends = (activeUser, friendId) => {
//     //     getFriendName()
//     // }

//     // getFriendName = () => {
//     //     FriendAPIManager.getFriendsByUser.concat(FriendAPIManager.getFriendsbyFriend)
//     // }
//     // constructNewRelationship = evt => {
//     //     evt.preventDefault();
//     //     const friend = {
//     //         activeUser: sessionStorage.getItem("credentials"),
//     //         otherFriendId: parseInt(this.state.friends.otherFriendId),
//     //     };

//     //     this.props
//     //         .addFriend(friend)
//     //     window.alert("Friend successfully added.")
//     //     window.location.reload(true);
//     // }


//     render() {
//         return (
//             <React.Fragment>
//                 <section className="friendsSection">
//                     <h1>Friends</h1>
//                     <div className="friends-list">

//                         {this.props.friends.map(friend => (

//                             <div>

//                                 <ul className="friend-list">
//                                     <li key={friend.otherFriendId} className="friend-table">{friend.username}</li>
//                                 </ul>

//                                 <div key={friend.id} className="friendCard">
//                                     <div className="card">
//                                         <div className="card-title">
//                                             <button className="btn-table" id={friend.id}
//                                                 onClick={() => {
//                                                     console.log(this.props.getFriendName)
//                                                     //     this.props.deleteFriend(friend.id)
//                                                     //     this.setState()
//                                                 }}
//                                             >
//                                                 Delete Friend</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <input
//                         id="friendToAdd"
//                         type="text"
//                         placeholder="Enter Username"
//                         onChange={this.handleFieldChange}></input>
//                     <button className="add-friend"
//                         onClick={() =>
//                             // console.log(this.state)
//                             this.AuthenticateFriend(this.state.addFriend, this.props.userId, this.props.otherFriendId)
//                         }
//                     >
//                         Add a Friend</button>
//                     <br></br>
//                     <span className="errorStatement">{this.state.errorStatement}</span>

//                 </section>
//             </React.Fragment >
//         )

//     }

// }
