export default {

    getAllGames: (id) => {
      return fetch(`http://localhost:5002/games?userId=${id}&_embed=genres&_embed=platforms`)
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
    editGame(editedGame) {
      return fetch(`http://localhost:5002/games/${editedGame.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedGame)
      }).then(data => data.json());
    }
}