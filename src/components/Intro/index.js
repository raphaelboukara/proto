import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Intro extends Component {
    constructor(props) {
        super(props);

        this.validate = this.props.validate.bind(this);
        this.next = this.props.next.bind(this);
        this.previous = this.props.previous.bind(this);
    }

    render() {
        return (
            <div className="intro">
                <h1>{ this.props.title }</h1>
                <button onClick={this.previous}>previous</button>
                <button onClick={() => this.validate(true)}>DONE</button>
                <button onClick={() => this.validate(false)}>FAILED</button>
                <button onClick={this.next}>next</button>
            </div>
        );
    }
}

Intro.propTypes = {
    title: PropTypes.string.isRequired,
    validate: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired
};

export default Intro;
