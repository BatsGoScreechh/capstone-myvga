export default {

  getAllUsers: () => {
    return fetch("https://vgadb.herokuapp.com/users?_embed=games&_embed=friends")
      .then(r => r.json())
  },
  getSingleUser: (id) => {
    return fetch(`https://vgadb.herokuapp.com/users/${id}?_embed=games`)
      .then(r => r.json())
  },
  deleteUser: (id) => {
    return fetch(`https://vgadb.herokuapp.com/users/${id}`, {
      method: "DELETE"
    })
      .then(() => fetch(`https://vgadb.herokuapp.com/users`))
      .then(e => e.json())
  },
  addNewUser(newUser) {
    return fetch(`https://vgadb.herokuapp.com/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json())
  },
  checkEmail(userEmail) {
    return fetch(`https://vgadb.herokuapp.com/users/?email=${userEmail}`)
      .then(r => r.json())
  },
  checkName(username) {
    return fetch(`https://vgadb.herokuapp.com/users/?username=${username}`)
      .then(r => r.json())
  },
  checkNameAndPassword(username, password) {
    return fetch(`https://vgadb.herokuapp.com/users/?username=${username}&&password=${password}`)
      .then(r => r.json())
  }
}