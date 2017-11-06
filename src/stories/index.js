import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import './../index.css';

import Bookmarks from './../components/Bookmarks';
import Bookmark from './../components/Bookmarks/Bookmark';

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


storiesOf('Bookmarks', module)
  .addDecorator(ScreenDecorator)
  .add(
    'start',
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
