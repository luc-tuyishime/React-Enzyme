import React, { Component } from 'react';
import '../index.css';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <p>{this.props.note.text}</p>
      </div>
    );
  }
}

export default Note;
