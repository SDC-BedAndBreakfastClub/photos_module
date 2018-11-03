/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../client/src/components/Modal/Modal';

describe('Modal Unit Tests', () => {
  test('The wrapper should exist', () => {
    const wrapper = shallow(
      <Modal
        currentPhoto={0}
        showModal
        showModalHandler={() => {}}
      />,
    );
    expect(wrapper).toBeDefined();
  });
  test('it should render when the showModal prop is true', () => {
    const wrapper = shallow(
      <Modal
        currentPhoto={0}
        showModal
        showModalHandler={() => {}}
      />,
    );
    expect(wrapper.find('.Modal')).toHaveLength(1);
  });
  test('it should not render when the showModal prop is false', () => {
    const wrapper = shallow(
      <Modal
        currentPhoto={0}
        showModal={false}
        showModalHandler={() => {}}
      />,
    );
    expect(wrapper.find('div')).toHaveLength(0);
  });

  describe('nextPhotoHandler', () => {
    test('it should increment the currentPhoto when less than the length of the photos array', () => {
      const wrapper = shallow(
        <Modal
          currentPhoto={3}
          photos={[1, 1, 1, 1, 1, 1]}
          showModal={false}
          showModalHandler={() => {}}
        />,
      );
      wrapper.instance().nextPhotoHandler();
      expect(wrapper.state(['currentPhoto'])).toBe(4);
    });
    test('it should set the currentPhoto to the first photo when at the end of the photos array', () => {
      const wrapper = shallow(
        <Modal
          currentPhoto={5}
          photos={[1, 1, 1, 1, 1, 1]}
          showModal={false}
          showModalHandler={() => {}}
        />,
      );
      wrapper.instance().nextPhotoHandler();
      expect(wrapper.state(['currentPhoto'])).toBe(0);
    });
  });

  describe('prevPhotoHandler', () => {
    test('it should decrement the currentPhoto when less than the length of the photos array', () => {
      const wrapper = shallow(
        <Modal
          currentPhoto={3}
          photos={[1, 1, 1, 1, 1, 1]}
          showModal={false}
          showModalHandler={() => {}}
        />,
      );
      wrapper.instance().prevPhotoHandler();
      expect(wrapper.state(['currentPhoto'])).toBe(2);
    });
    test('it should set the currentPhoto to the last photo when at the beginning of the photos array', () => {
      const wrapper = shallow(
        <Modal
          currentPhoto={0}
          photos={[1, 1, 1, 1, 1, 1]}
          showModal={false}
          showModalHandler={() => {}}
        />,
      );
      wrapper.instance().prevPhotoHandler();
      expect(wrapper.state(['currentPhoto'])).toBe(5);
    });
  });
});
