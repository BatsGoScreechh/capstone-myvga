// const FriendManager = {

//     getAllFriends: (id) => {
//         return fetch(`http://localhost:5002/friends?userId=${id}`)
//             .then(r => r.json())
//     },
//     addNewFriend: (newFriend) => {
//         return fetch(`http://localhost:5002/friends`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newFriend)
//         })
//     },
//     deleteFriend: (id) => {
//         return fetch(`http://localhost:5002/friends/${id}`,{
//             method: "DELETE"
//         })
//             .then(r => r.json())
//     },

//     getFriendsByUser: (id) => {
//         return fetch(`http://localhost:5002/friends?userId=${id}`)
//         .then(r => r.json())

//     },

//     getFriendsbyFriend: (id) => {
//         return fetch(`http://localhost:5002/friends?otherFriendId=${id}`)
//         .then(r => r.json())

//     }
//     // getFriendsWithStuff: (id) => {

//     //     return fetch(`http://localhost:5002/users/${id}?&_embed=games`)
//     //         .then(r => r.json())
//     // }
// }

// export default FriendManager;
