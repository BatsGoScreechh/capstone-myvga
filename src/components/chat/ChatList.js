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
                <div id="chat-body">
                    <div className="chat-div">
                        <h1>Chat</h1>
                        <div id="chat">
                            {this.props.messages.map(singleMessage => {
                                if (singleMessage.userId === sessionStorage.getItem("activeUser")) {
                                    return <div key={singleMessage.id}>
                                        <div className="user-content">
                                            <div className="user-message">
                                                {singleMessage.user.username}{": "}

                                                <div className="message">
                                                    {singleMessage.message}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                } else {
                                    return <div key={singleMessage.id}>
                                        <div className="other-content">
                                            <div className="other-message">
                                                {singleMessage.user.username}{": "}


                                                <div className="message">
                                                    {singleMessage.message}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                }
                            })}
                        </div>
                        <div className="chat-input">
                            <div className="form-group">
                                <input type="text" className="chat-control" id="message" placeholder="Enter Message" onChange={this.handleFieldChange} />
                            </div>
                            <button type="submit" className="btn" onClick={this.constructNewMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}