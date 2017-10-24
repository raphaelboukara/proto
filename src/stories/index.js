import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Bookmarks from './../components/Bookmarks';


storiesOf('Bookmarks', module)
    .add(
        'start',
        () => <Bookmarks />
    );
