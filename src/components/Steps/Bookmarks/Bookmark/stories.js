import React from 'react';

import { storiesOf } from '@storybook/react';

import './../../../../index.css';

import Bookmarks from './../index.js';
import Bookmark from './index.js';

const BookmarkDecorator = (storyFn) => (
    <Bookmarks>
        { storyFn() }
    </Bookmarks>
);

storiesOf('Bookmark', module)
    .addDecorator(BookmarkDecorator)
    .add(
        'current',
        () => <Bookmark step={1}
                description="Une belle petite description, pas trop longue hein, pour savoir."
                current/>
    )
    .add(
        'done',
        () => <Bookmark step={2}
                description="Une belle petite description, pas trop longue hein, pour savoir."
                done/>
    )
    .add(
        'failed',
        () => <Bookmark step={3}
                description="Une belle petite description, pas trop longue hein, pour savoir."
                failed/>
    )
    .add(
        'default',
        () => <Bookmark step={4}
                description="Une belle petite description, pas trop longue hein, pour savoir."/>
    );
