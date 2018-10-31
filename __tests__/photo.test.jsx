/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Photo from '../client/src/components/Photo/Photo';

describe('Photo Component Unit Tests', () => {
  test('it should render a single IMG element', () => {
    const wrapper = shallow(
      <Photo
        imageUrl="https://via.placeholder.com/150"
        altText="Test"
        photoIndex={0}
      />,
    );
    expect(wrapper.find('img').length).toEqual(1);
  });
});
