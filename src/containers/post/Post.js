import gql from 'lib/gql';
import React from 'react';
import PropTypes from 'prop-types';
import Post from 'components/post/Post';

const fragment = `
  fragment containerPost on Post {
    ...post
  }
  ${Post.fragment}
`;

const PostContainer = ({ posts }) => (
  <div>
    {
      posts.map(post => (
        <Post
          key={post._id}
          post={post}
        />
      ))
    }
  </div>
);

PostContainer.fragment = fragment;

PostContainer.defaultProps = {
  posts: []
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(gql.checkShape(fragment))
};

export default PostContainer;
