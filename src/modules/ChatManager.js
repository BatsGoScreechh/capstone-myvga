export default {

    getAllMessages: () => {
        return fetch("https://vgadb.herokuapp.com/messages/?_expand=user")
            .then(chats => chats.json())
    },

    getSingleMessage: (id) => {
        return fetch(`https://vgadb.herokuapp.com/messages/${id}`)
            .then(chats => chats.json())

    },

    addMessage(newMessage) {
        return fetch("https://vgadb.herokuapp.com/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(r => r.json())
    }
}