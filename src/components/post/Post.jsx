import gql from 'lib/gql';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const fragment = `
  fragment post on Post {
    title
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Subtitle = styled.h4`
  font-size: 1em;
  text-align: center;
  color: pink;
`;

const Post = ({ post, dataExample }) => (
  <div>
    <Title>{JSON.stringify(post)} </Title> -
    <Subtitle>{dataExample}</Subtitle>
  </div>
);

Post.fragment = fragment;

Post.defaultProps = {
  dataExample: 'dataExample'
};

Post.propTypes = {
  post: gql.checkShape(fragment).isRequired,
  dataExample: PropTypes.string
};

export default Post;
