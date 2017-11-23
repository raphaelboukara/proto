import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bookmark extends Component {

    className() {
        const { current, done, failed } = this.props;
        let className = 'bookmark';

        if (current) {
            className = `${className} current`;
        }

        if (done) {
            className = `${className} done`;
        }

        if (failed) {
            className = `${className} failed`;
        }

        return className;
    }

    render() {
        const { step, description } = this.props;

        return (
            <div className={this.className()}>
                <span className="step">{step}</span>
                <span>{description}</span>
            </div>
        );
    }
}

Bookmark.propTypes = {
    step: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    current: PropTypes.bool,
    done: PropTypes.bool,
    failed: PropTypes.bool
};

Bookmark.defaultProps = {
    current: false,
    done: false,
    failed: false
};

export default Bookmark;
