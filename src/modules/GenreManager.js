export default {

    getSingleGenre: () => {
        return fetch(`http://localhost:5002/genres`)
            .then(r => r.json())
    },

    getAllGenres: () => {
        return fetch(`http://localhost:5002/genres?_embed=games`)
            .then(r => r.json())
    }
}