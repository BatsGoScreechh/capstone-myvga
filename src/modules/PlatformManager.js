export default {

    getSinglePlatform: () => {
        return fetch(`http://localhost:5002/platforms/`)
            .then(r => r.json())
    },

    getAllPlatforms: (id) => {
        return fetch(`http://localhost:5002/platforms?userId=${id}`)
            .then(r => r.json())
    }
}