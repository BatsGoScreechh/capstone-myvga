<div className="library-table" id="library">
  <div className="library-entry" id="entry" key={game.id}>
    <ul className="library-list">
      <li key={game.id} className="game-table">{game.title}</li>
      <li key={game.genreId} className="genre-table">
        {game.genre.name}</li>
    </ul>
    <div className="button-table">
      <button className="edit-button" id={game.id}
        onClick=
        {
          this._showGame.bind(null, true)
        }
      >Edit</button>