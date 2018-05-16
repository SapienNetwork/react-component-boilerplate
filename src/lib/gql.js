import gql from 'graphql-tag';
import { filter, propType } from 'graphql-anywhere';

export default {
  filter: (queryString, data) => {
    const query = gql`${queryString}`;
    return filter(query, data);
  },
  checkShape: queryString => (
    propType(gql`${queryString}`)
  )
};
