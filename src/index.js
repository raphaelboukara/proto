import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'

import reducer from './reducers';

import Steps from './components/Steps';

import Intro from './components/Intro';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

    render() {
        return (
            <Steps dispatch={this.props.dispatch} steps={this.props.steps}>
                <Steps.Step description="Une premiere étape tp cool!!">
                    <Intro title="Étape 1"/>
                </Steps.Step>
                <Steps.Step description="Une seconde étape tp cool!!">
                    <Intro title="Étape 1"/>
                </Steps.Step>
                <Steps.Step description="Une autre étape tp cool!!">
                    <Intro title="Étape 3"/>
                </Steps.Step>
            </Steps>
        );
    }
}

const ConnectedApp = connect(({ steps }) => ({ steps }))(App);

render(
    <Provider store={store}>
        <ConnectedApp/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
