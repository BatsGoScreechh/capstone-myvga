// render() {
//   return (
//     <React.Fragment>
//       <div className="library-table" id="library">
//         <section className="games">
//           {this.props.matchingGames.map(game => {
//             // if (game.userId === sessionStorage.getItem("credentials")) {
//             if (game.id === this.state.gameToEdit.id) {
//               console.log("Complete and Total success")
//               return <div className="library-entry" id="entry" key={game.id}>
//                 <div className="form-group">
//                   <label htmlFor="edit-game"></label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     onChange={this.handleFieldChange}
//                     id="title"
//                     defaultValue={game.title}
//                   />
//                   < select
//                     defaultValue={game.genreId}
//                     name="genre"
//                     id="genreId"
//                     onChange={this.handleFieldChange}
//                   >
//                     <option value="">{game.genreId}</option>
//                     {this.props.genres.map(g => (
//                       <option key={g.id} id={g.id} value={g.id}>
//                         {g.name}
//                       </option>
//                     ))
//                     }
//                   </select >
//                   < select
//                     defaultValue={game.platformId}
//                     name="platform"
//                     id="platformId"
//                     onChange={this.handleFieldChange}
//                   >
//                     <option value="">{game.platformId}</option>
//                     {this.props.platforms.map(p => (
//                       <option key={p.id} id={p.id} value={p.id}>
//                         {p.name}
//                       </option>
//                     ))}
//                   </select >
//                   <button
//                     type="submit"
//                     onClick={
//                       this.constructEditGame
//                     }
//                     className="submit-game-button"
//                   >Submit</button>
//                 </div>
//               </div>
//             }
//             else {
//               return <div className="library-entry" id="entry" key={game.id}>
//                 <ul className="library-list">
//                   <li key={game.id} className="game-table">{game.title}</li>
//                   <li key={game.genreId} className="genre-table">
//                     {game.genre.name}</li>
//                 </ul>
//                 <div className="button-table">
//                   <button className="edit-button" id={game.id}
//                     onClick={() => {
//                       this.setState({
//                         gameToEdit: game
//                       })
//                     }}
//                   >Edit</button>
//                 </div>
//               </div>
//             }
//             //   else {
//             //     return <div className="library-entry" id="entry" key={game.id}>
//             //   <ul className="library-list">
//             //     <li key={game.id} className="game-table">{game.title}</li>
//             //     <li key={game.genreId} className="genre-table">
//             //       {game.genre.name}</li>
//             //   </ul>
//             // </div>
//             // }
//           }
//           )
//           }


//         </section>
//       </div>
//     </React.Fragment >
//   )
// }
