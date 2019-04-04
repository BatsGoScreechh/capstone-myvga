export default {

  getAllUsers: () => {
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
  },
  checkEmail(userEmail) {
    return fetch(`http://localhost:5002/users/?email=${userEmail}`)
      .then(r => r.json())
  },
  checkName(username) {
    return fetch(`http://localhost:5002/users/?username=${username}`)
      .then(r => r.json())
  },
  checkNameAndPassword(username, password) {
    return fetch(`http://localhost:5002/users/?username=${username}&&password=${password}`)
      .then(r => r.json())
  }
}