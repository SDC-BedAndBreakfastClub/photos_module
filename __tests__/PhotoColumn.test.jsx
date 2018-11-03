/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import PhotoColumn from '../client/src/components/PhotoColumn/PhotoColumn';
import Photo from '../client/src/components/Photo/Photo';
import mockData from '../__mocks__/data/listing100.json';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <PhotoColumn
      photos={mockData}
      columnType="second_column"
      currentHoveredPhoto={0}
      updateCurrentHandler={() => {}}
      showModalHandler={() => {}}
    />,
  );
});

describe('PhotoColumn Component Unit Tests', () => {
  test('wrapper should exist', () => {
    expect(wrapper.find('.column')).toBeDefined();
  });

  test('it should render one column', () => {
    expect(wrapper.find('.column').length).toEqual(1);
  });

  test('it should render two Photo components', () => {
    expect(wrapper.find(Photo).length).toEqual(2);
  });
});
