export default {

    getAllGames: () => {
      return fetch(`http://localhost:5002/games?_expand=genre&_expand=platform`)
        .then(r => r.json())
    },
    getSingleGame: (id) => {
      return fetch(`http://localhost:5002/games/${id}`)
        .then(r => r.json())
    },
    deleteGame: (id) => {
      return fetch(`http://localhost:5002/games/${id}`, {
        method: "DELETE"
      })
        .then(() => fetch(`http://localhost:5002/games`))
        .then(e => e.json())
    },
    addNewGame(newGame) {
      return fetch(`http://localhost:5002/games`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)
      }).then(data => data.json())
    },
    updateGame(editedGame) {
      return fetch(`http://localhost:5002/games/${editedGame.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedGame)
      }).then(data => data.json());
    }
}