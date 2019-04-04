export default {
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
  checkNameAndEmail(username, email) {
    return fetch(`http://localhost:5002/users/?username=${username}&&email=${email}`)
      .then(r => r.json())
  }
}