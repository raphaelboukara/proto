import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import './../../index.css';

import Intro from './index.js';

const ScreenDecorator = (storyFn) => (
    <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }}>
        { storyFn() }
    </div>
);


storiesOf('Intro', module)
    .addDecorator(ScreenDecorator)
    .add(
        'example',
        () => {
            return (
                <Intro title="VIVE PROTO ET LES VESTES A RAYURES!!"
                    validate={action(`Click validate`)}
                    previous={action('Click previous')}
                    next={action('Click next')}/>
            );
        }
    );
