import React, { Component } from "react";
import AddGame from "./AddGame";
// import ChatEdit from "../chat/chatEdit";
import ChatForm from "../chat/chatForm";

export default class Chat extends Component {
  render() {
    return (
      <React.Fragment>

        <AddGame
          {...this.props}
          messages={this.props.messages}
          addMessage={this.props.addMessage}
          deleteMessage={this.props.deleteMessage}
          updateMessage={this.props.updateMessage}

        />

        <ChatForm
        {...this.props}
          messages={this.props.messages}
          addMessage={this.props.addMessage}

        />
      </React.Fragment>
    );
  }
}