import React, { Component } from "react"
import "./Chat.css"
export default class ChatList extends Component {

    state = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        message: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    //Builds information as object
    constructNewMessage = evt => {
        evt.preventDefault();
        const message = {
            message: this.state.message,
            userId: sessionStorage.getItem("activeUser")
        };

        this.props.addMessage(message)
        this.setState()
    }


    render() {

        return (
            <React.Fragment>
                <div className="chat-div">
                    <h1>Chat</h1>
                    <div className="chat">
                        {this.props.messages.map(singleMessage => {
                            if (singleMessage.userId === sessionStorage.getItem("activeUser")) {
                                return <div key={singleMessage.id}>
                                    <div className="user-message"><strong>{singleMessage.user.username}</strong>{": "}</div>
                                    {singleMessage.message}</div>

                            }else{
                                return <div key={singleMessage.id}>
                            <div className="other-message"><strong>{singleMessage.user.username}</strong>{": "}</div>
                            {singleMessage.message}
                        </div>

                            }
                            })}
                    </div>
                    <div className="chat-input">
                        <div className="form-group">
                            <input type="text" className="form-control" id="message" placeholder="Enter Message" onChange={this.handleFieldChange} />
                        </div>
                        <button type="submit" className="btn" onClick={this.constructNewMessage}>Send</button>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}