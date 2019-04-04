export default {

    getAllFriends: () => {
        return fetch(`http://localhost:5002/friends`)
            .then(r => r.json())
    },
    addFriend: (newFriend) => {
        return fetch(`http://localhost:5002/friends`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFriend)
        })
    },
    deleteFriend: (id) => {
        return fetch(`http://localhost:5002/friends/${id}`,{
            method: "DELETE"
        })
            .then(r => r.json())
    },
    getFriendsWithStuff: (id) => {

        return fetch(`http://localhost:5002/users/${id}?&_embed=games`)
            .then(r => r.json())
    }
}