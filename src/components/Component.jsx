import React from 'react';
import gql from 'lib/gql';
import PropTypes from 'prop-types';

const fragment = `
  fragment componentPost on Post {
    title
  }
`;

const Component = ({ post, dataExample }) => (
  <div>
    {JSON.stringify(post)} -
    {dataExample}
  </div>
);

Component.fragment = fragment;

Component.defaultProps = {
  dataExample: 'dataExample'
};

Component.propTypes = {
  post: gql.checkShape(fragment).isRequired,
  dataExample: PropTypes.string
};

export default Component;
