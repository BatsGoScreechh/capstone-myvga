import React, { Component } from "react";



export default class GameNav extends Component {
    state = {
        matchingGames: [],
        games: ""
    }

    filterGame = (pId) => {
        let matchingGames = this.props.games.filter(game => game.platform.id === pId)
        this.setState({
            matchingGames: matchingGames
        })

    }

    render() {
        return (
            this.props.platforms.map(p => (
            <nav className="navbar">
                <button type="button" className="navbar-buttons" onClick={
                    () => this.filterGame(p.id)} key={p.id}>{p.name}</button>
            </nav>
            )
        ))}
    }