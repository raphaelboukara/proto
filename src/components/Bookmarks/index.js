import React, { Component } from 'react';

import './style.css';

import Bookmark from './Bookmark';

class Bookmarks extends Component {
  render() {
    return (
      <div className="bookmarks">
        {this.props.children}
      </div>
    );
  }
}

export default Bookmarks;
