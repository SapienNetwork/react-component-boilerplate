import gql from 'lib/gql';
import Fake from '@/test/fake';
import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './Component';

storiesOf('Component', module)
  .add('to Storybook', () => (
    <Component
      post={gql.filter(
        Component.fragment,
        Fake.post()
      )}
    />
  ));
