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
        currentHoveredPhoto={0}
        updateCurrentHandler={() => {}}
        showModalHandler={() => {}}
      />,
    );
    expect(wrapper.find('img').length).toEqual(1);
  });
  test('it should apply the darken class to the PhotoContainer div when isHeroHovered is true and it\'s not the current photo', () => {
    const wrapper = shallow(
      <Photo
        imageUrl="https://via.placeholder.com/150"
        altText="Test"
        photoIndex={0}
        isHeroHovered
        currentHoveredPhoto={1}
        updateCurrentHandler={() => {}}
        showModalHandler={() => {}}
      />,
    );
    expect(wrapper.find('.PhotoContainer').hasClass('darken')).toBe(true);
  });
  test('it shouldn\'t apply the darken class to the PhotoContainer div when isHeroHovered is true and it is the current photo', () => {
    const wrapper = shallow(
      <Photo
        imageUrl="https://via.placeholder.com/150"
        altText="Test"
        photoIndex={0}
        isHeroHovered
        currentHoveredPhoto={0}
        updateCurrentHandler={() => {}}
        showModalHandler={() => {}}
      />,
    );
    expect(wrapper.find('.PhotoContainer').hasClass('darken')).toBe(false);
  });
  test('it should call the showModalHandler passed in as props when a .PhotoContainer div is clicked', () => {
    const showModalHandler = jest.fn();
    const wrapper = shallow(
      <Photo
        imageUrl="https://via.placeholder.com/150"
        altText="Test"
        photoIndex={0}
        isHeroHovered
        currentHoveredPhoto={0}
        updateCurrentHandler={() => {}}
        showModalHandler={showModalHandler}
      />,
    );
    wrapper.find('.PhotoContainer').simulate('click');
    expect(showModalHandler).toHaveBeenCalledTimes(1);
  });
  test('it should call the showModalHandler with true as an argument', () => {
    const showModalHandler = jest.fn();
    const wrapper = shallow(
      <Photo
        imageUrl="https://via.placeholder.com/150"
        altText="Test"
        photoIndex={0}
        isHeroHovered
        currentHoveredPhoto={0}
        updateCurrentHandler={() => {}}
        showModalHandler={showModalHandler}
      />,
    );
    wrapper.find('.PhotoContainer').simulate('click');
    expect(showModalHandler).toHaveBeenCalledWith(true);
  });
});
