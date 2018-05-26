import gql from 'lib/gql';
import React from 'react';
import { storiesOf } from '@storybook/react';
import Post from './Post';

storiesOf('Post', module)
  .add('to Storybook', () => (
    <Post
      post={gql.filter(
        Post.fragment,
        { title: 'Hello' },
      )}
    />
  ));
