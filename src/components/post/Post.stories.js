import gql from 'lib/gql';
import Fake from '@/test/fake';
import React from 'react';
import { storiesOf } from '@storybook/react';
import Post from './Post';

storiesOf('Post', module)
  .add('to Storybook', () => (
    <Post
      post={gql.filter(
        Post.fragment,
        Fake.post()
      )}
    />
  ));
