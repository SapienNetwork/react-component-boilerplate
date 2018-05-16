import _ from 'lodash';
import hipsum from 'lorem-hipsum';

const fakeText = (min = 1, max = 4) =>
  _.upperFirst(hipsum({ count: _.random(min, max), units: 'sentences' }));

export default {
  post: (props = {}) => ({
    title: fakeText(),
    ...props
  })
};
