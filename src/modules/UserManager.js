export default {

    getAllUsers: (id) => {
      return fetch("http://localhost:5002/users?_embed=games")
        .then(r => r.json())
    },
    getSingleUser: (id) => {
      return fetch(`http://localhost:5002/users/${id}?_embed=games`)
        .then(r => r.json())
    },
    deleteUser: (id) => {
      return fetch(`http://localhost:5002/users/${id}`, {
        method: "DELETE"
      })
        .then(() => fetch(`http://localhost:5002/users`))
        .then(e => e.json())
    },
    addNewUser(newUser) {
      return fetch(`http://localhost:5002/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      }).then(data => data.json())
    }
}