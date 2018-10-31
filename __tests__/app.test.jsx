/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App/App';
import PhotoColumn from '../client/src/components/PhotoColumn/PhotoColumn';

test('it renders two photo columns', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(PhotoColumn)).to.have.lengthOf(2);
});
