import React, { Component } from 'react';

import Bookmarks from './Bookmarks';
import Bookmark from './Bookmarks/Bookmark';

import * as actions from './actions';
import * as constants from './constants';

import './style.css';

import Step from './Step';

class Steps extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 0
        }
    }

    countSteps() {
        const { children } = this.props;

        return React.Children.count(children);
    }

    next() {
        const { current } = this.state;


        if (current + 1 === this.countSteps()) {
            return;
        }

        this.setState({
            current: current + 1
        });
    }

    previous() {
        const { current } = this.state;

        this.setState({
            current: current ? current - 1 : current
        });
    }

    validate(status) {
        const { current } = this.state;

        this.props.dispatch(actions.validateStep(
            current,
            status ? constants.STATUS_SUCCESS : constants.STATUS_FAILED
        ));
    }

    renderBookmarks() {
        const { children, steps = {} } = this.props,
            { current } = this.state;

        return React.Children.map(
            children,
            ({ props: { description } }, index) => {
                const { status } = steps[index] || {};

                return (
                    <Bookmark step={index + 1}
                        description={description}
                        current={index === current}
                        done={status === constants.STATUS_SUCCESS}
                        failed={status === constants.STATUS_FAILED}/>
                );
            }
        );
    }

    renderSteps() {
        const { children } = this.props,
            { current } = this.state;

        return React.Children.map(
            children,
            ({ props: { children } }, index) => {
                if (index !== current) {
                    return null;
                }

                if (React.Children.count(children) > 1) {
                    return children;
                }

                return React.cloneElement(
                    children,
                    {
                        validate: (status) => this.validate(status),
                        previous: () => this.previous(),
                        next: () => this.next()
                    }
                );
            }
        );
    }

    componentDidMount() {
        const { children } = this.props;

        React.Children.forEach(children, (_, index) => {
            this.props.dispatch(actions.initStep(index));
        });
    }

    render() {
        return (
            <div className="layout">
                <div className="layout-bookmarks">
                    <Bookmarks>
                        { this.renderBookmarks() }
                    </Bookmarks>
                </div>
                <div className="layout-steps">
                    { this.renderSteps() }
                </div>
            </div>
        );
    }
}

Steps.Step = Step;

Steps.actions = actions;
Steps.constants = constants;

export default Steps;
