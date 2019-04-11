export default {

    getSinglePlatform: () => {
        return fetch(`https://vgadb.herokuapp.com/platforms/`)
            .then(r => r.json())
    },

    getAllPlatforms: (id) => {
        return fetch(`https://vgadb.herokuapp.com/platforms?userId=${id}`)
            .then(r => r.json())
    }
}