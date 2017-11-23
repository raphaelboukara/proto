import React from 'react';

import { storiesOf } from '@storybook/react';

import './../../../index.css';

import Bookmarks from './index.js';
import Bookmark from './Bookmark';

const ScreenDecorator = (storyFn) => (
    <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '300px'
    }}>
        { storyFn() }
    </div>
);


storiesOf('Bookmarks', module)
    .addDecorator(ScreenDecorator)
    .add(
        'example',
        () => {
            return (
                <Bookmarks>
                    <Bookmark step={1}
                        description="Une belle petite description, pas trop longue hein, pour savoir."
                        done/>
                    <Bookmark step={2}
                        description="Une belle petite description, pas trop longue hein, pour savoir."
                        done/>
                    <Bookmark step={3}
                        description="Une belle petite description, pas trop longue hein, pour savoir."
                        failed/>
                    <Bookmark step={4}
                        description="Une belle petite description, pas trop longue hein, pour savoir."
                        current/>
                    <Bookmark step={5}
                        description="Une belle petite description, pas trop longue hein, pour savoir."/>
                    <Bookmark step={6}
                        description="Une belle petite description, pas trop longue hein, pour savoir."/>
                </Bookmarks>
            );
        }
    );
