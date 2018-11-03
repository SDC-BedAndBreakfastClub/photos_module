/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import ModalGallery from '../client/src/components/Modal/ModalGallery/ModalGallery';
import mockData from '../__mocks__/data/listing100.json';

describe('Modal Gallery Unit Tests', () => {
  test('wrapper should exist', () => {
    const wrapper = shallow(
      <ModalGallery
        currentPhoto={0}
        photos={mockData}
        showGallery
        updateCurrentPhoto={() => {}}
      />,
    );
    expect(wrapper).toBeDefined();
  });
  test('it should call updateCurrentPhoto when clicked', () => {
    const updateCurrentPhoto = jest.fn();
    const wrapper = shallow(
      <ModalGallery
        currentPhoto={0}
        photos={mockData}
        showGallery
        updateCurrentPhoto={updateCurrentPhoto}
      />,
    );
    wrapper.find('.GalleryItem').at(5).simulate('click');
    expect(updateCurrentPhoto).toHaveBeenCalled();
  });
});
