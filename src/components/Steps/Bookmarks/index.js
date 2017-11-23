import React, { Component } from 'react';

import './style.css';

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
