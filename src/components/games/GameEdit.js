import React from 'react';
import { render } from 'react-dom';

export default class GameEdit extends React.Component {

  constructor() {
    super();
    this.state = { showGame: false }
  }

  _showGame = (bool) => {
    this.setState({
      showGame: bool
    });
  }

  render() {
    return (
      <div>
        Click the buttons to toggle the message <br/>
        <button onClick={this._showMessage.bind(null, true)}>show</button>
        { this.state.showMessage && (<div>hello world!</div>) }
      </div>
    )
  }
}

render(<GameEdit />, document.getElementById('library-table'));