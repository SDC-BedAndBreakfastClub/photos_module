/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../client/src/components/Modal/Modal';

describe('Modal Unit Tests', () => {
  test('The wrapper should exist', () => {
    const wrapper = shallow(<Modal showModal />);
    expect(wrapper).toBeDefined();
  });
  test('it should render when the showModal prop is true', () => {
    const wrapper = shallow(
      <Modal
        showModal
      />,
    );
    expect(wrapper.find('div')).toHaveLength(1);
  });
  test('it should not render the showModal prop is false', () => {
    const wrapper = shallow(
      <Modal showModal={false} />,
    );
    expect(wrapper.find('div')).toHaveLength(0);
  });
});
