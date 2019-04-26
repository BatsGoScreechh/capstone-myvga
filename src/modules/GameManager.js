export default {

    getAllGames: (id) => {
      return fetch(`https://vgadb.herokuapp.com/games?_expand=genre&_expand=platform&userId=${id}`)
        .then(r => r.json())
    },
    getSingleGame: (id) => {
      return fetch(`https://vgadb.herokuapp.com/games/${id}`)
        .then(r => r.json())
    },
    deleteGame: (id) => {
      return fetch(`https://vgadb.herokuapp.com/games/${id}`, {
        method: "DELETE"
      })
        .then(() => fetch(`https://vgadb.herokuapp.com/games?_expand=genre&_expand=platform`))
        .then(e => e.json())
    },
    addNewGame(newGame) {
      return fetch(`https://vgadb.herokuapp.com/games`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)
      }).then(data => data.json())
    },
    updateGame(editedGame) {
      return fetch(`https://vgadb.herokuapp.com/games/${editedGame.id}?_expand=genre&_expand=platform`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedGame)
      }).then(data => data.json());
    },

    getGames() {
      return fetch(`https://vgadb.herokuapp.com/games`)
      .then (r => r.json())
    }
}