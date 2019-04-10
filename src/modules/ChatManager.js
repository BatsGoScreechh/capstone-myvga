export default {

    getAllMessages: () => {
        return fetch("http://localhost:5002/messages/?_expand=user")
            .then(chats => chats.json())
    },

    getOneMessage: (id) => {
        return fetch(`http://localhost:5002/messages/${id}`)
            .then(chats => chats.json())

    },

    addMessage(newMessage) {
        return fetch("http://localhost:5002/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        }).then(r => r.json())
    }
}