export default {

    getSingleGenre: () => {
        return fetch(`https://vgadb.herokuapp.com/genres`)
            .then(r => r.json())
    },

    getAllGenres: () => {
        return fetch(`https://vgadb.herokuapp.com/genres?_embed=games`)
            .then(r => r.json())
    }
}