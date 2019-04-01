import React, { Component } from "react";
import GameAPIManager from '../../modules/GameManager'

export default class GameList extends Component {

    state = {
        matchingGames: [],
        gameToEdit: "",
        showGame: false,
        userId: parseInt(sessionStorage.getItem("activeUser"))
    };



    _showGame = (bool) => {
        this.setState({
            showGame: bool
        });
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructEditGame = evt => {
        evt.preventDefault();
        if (this.state.title === "") {
            window.alert("Cannot leave blank");
        } else {
            const editedGame = {
                id: this.state.gameToEdit.id,
                title: this.state.title,
                genreId: parseInt(this.state.genreId),
                platformId: parseInt(this.state.platformId),
                userId: sessionStorage.getItem("credentials")
                // Make sure the employeeId is saved to the database as a number since it is a foreign key.

            };

            this.props.updateGame(editedGame)
                .then(() => window.location.reload(true)
                    .then(this.setState({
                        gameToEdit: "",
                    })
                    )
                )
        }
    }

    handleEditFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }

    filterGame = (pId) => {
        let matchingGames = this.props.games.filter(game => game.platform.id === pId)
        this.setState({
            matchingGames: matchingGames
        })

    }


    // renderEditForm = (evt) => {
    //     evt.preventDefault()
        // console.log(this.state)
        // this react fragment will allow you to render an edit form in the messages field
        // this.props.games.map(singleGame => (
        //     if (singleGame.id === this.state.gameToEdit.id) {
        //         return (
        //             <React.Fragment>
        //                 <form className="library-table" id="library">
        //                     <div className="form-group">
        //                         <label htmlFor="edit-game"></label>
        //                         <input
        //                             type="text"
        //                             className="form-control"
        //                             onChange={this.handleFieldChange}
        //                             id="title"
        //                             value={this.state.title}
        //                         />
        //                         < select
        //                             value={this.state.genreId}
        //                             name="genre"
        //                             id="genreId"
        //                             onChange={this.handleFieldChange}
        //                         >
        //                             <option value="">Select Genre</option>
        //                             {this.props.genres.map(g => (
        //                                 <option key={g.id} id={g.id} value={g.id}>
        //                                     {g.name}
        //                                 </option>
        //                             ))}
        //                         </select >
        //                         < select
        //                             value={this.state.platformId}
        //                             name="platform"
        //                             id="platformId"
        //                             onChange={this.handleFieldChange}
        //                         >
        //                             <option value="">Select Genre</option>
        //                             {this.props.genres.map(g => (
        //                                 <option key={g.id} id={g.id} value={g.id}>
        //                                     {g.name}
        //                                 </option>
        //                             ))}
        //                         </select >
        //                     </div>
        //                     <button
        //                         type="submit"
        //                         onClick={this.editGame}
        //                         className="submit-game-button"
        //                     >Submit</button>

        //                 </form>
        //             </React.Fragment>




        editGame = () => {
            // this function allows you to create an edited message and PUT it to the database
            const editedGame = {

                title: this.state.title,
                genreId: parseInt(this.state.genreId),
                platformId: parseInt(this.state.platformId),
                userId: sessionStorage.getItem("credentials")
            }
            this.props.updateGame(editedGame)


        }


        render() {
            console.log(this.state)
            // debugger
            if (this.state.matchingGames.length === 0) {
                return (

                    <div className="game-div">

                        {/* My Games Library */}
                        <section className="games">
                            <h1 htmlFor="Game">My Game Library</h1>
                            {this.props.platforms.map(p => (

                                <nav className="navbar">

                                    <button type="button" className="navbar-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</button>

                                </nav>
                            ))}
                            {


                                // console.log(this.props)

                                <div className="library-table" id="library">
                                    <p className="no-games-message">Welcome to MyVGA.</p>
                                </div>




                            }
                        </section>
                    </div>
                )

            } else if (this.state.matchingGames.length >= 1) {
                return (
                    <div className="game-div">
                        {/* My Games Library */}
                        <section className="games">
                            <h1 htmlFor="Game">My Game Library</h1>
                            {this.props.platforms.map(p => (

                                <nav className="navbar">

                                    <button type="button" className="navbar-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</button>

                                </nav>
                            ))}
                            {

                                this.state.matchingGames.map(game =>

                                    // console.log(this.props)
                                    <div className="library-table" id="library">
                                        <ul className="library-list">
                                            <li key={game.id} className="game-table">{game.title}</li>
                                            <li key={game.genreId} className="genre-table">
                                                {game.genre.name}</li>
                                        </ul>
                                        <div className="button-table">
                                            <button className="edit-button" id={game.id}
                                                onClick={this._showGame.bind(null, true)}>Edit</button>

                                            {this.state.showGame && (
                                                <React.Fragment>
                                                    <form className="library-table" id="library">
                                                        <div className="form-group">
                                                            <label htmlFor="edit-game"></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                onChange={this.handleFieldChange}
                                                                id="title"
                                                                value={game.title}
                                                            />
                                                            < select
                                                                value={game.genreId}
                                                                name="genre"
                                                                id="genreId"
                                                                onChange={this.handleFieldChange}
                                                            >
                                                                <option value="">Select Genre</option>
                                                                {this.props.genres.map(g => (
                                                                    <option key={g.id} id={g.id} value={g.id}>
                                                                        {g.name}
                                                                    </option>
                                                                ))}
                                                            </select >
                                                            < select
                                                                value={game.platformId}
                                                                name="platform"
                                                                id="platformId"
                                                                onChange={this.handleFieldChange}
                                                            >
                                                                <option value="">Select Platform</option>
                                                                {this.props.platforms.map(p => (
                                                                    <option key={p.id} id={p.id} value={p.id}>
                                                                        {p.name}
                                                                    </option>
                                                                ))}
                                                            </select >
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            onClick={this.editGame}
                                                            className="submit-game-button"
                                                        >Submit</button>

                                                    </form>
                                                </React.Fragment>)}
                                            <button
                                                type="button"
                                                className="delete-button"
                                                onClick={() => {
                                                    this.props.deleteGame(game.id)
                                                    window.alert("Game successfully deleted from library.")
                                                    window.location.reload(true)
                                                }}
                                            >
                                                Delete
                                                </button>
                                        </div>


                                    </div>
                                )
                            }
                        </section>
                    </div>
                )
            } else if (this.state.matchingGames.title === null) {
                return (

                    <div className="game-form">
                        {/* My Games Library */}
                        <section className="games">
                            <h1 htmlFor="Game">My Game Library</h1>
                            {this.props.platforms.map(p => (

                                <nav className="navbar">

                                    <button type="button" className="navbar-buttons" onClick={() => this.filterGame(p.id)} key={p.id}>{p.name}</button>

                                </nav>
                            ))}
                            {


                                // console.log(this.props)

                                <div className="library-table">
                                    <p className="game-name">There are no games in your library listed under this platform.</p>
                                </div>
                            }
                        </section>
                    </div>
                )
            }
        }
    }