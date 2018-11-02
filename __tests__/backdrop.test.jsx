/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import Backdrop from '../client/src/components/Modal/Backdrop/Backdrop';

describe('Backdrop Unit Tests', () => {
  test('The wrapper should exist', () => {
    const wrapper = shallow(<Backdrop showModal />);
    expect(wrapper).toBeDefined();
  });
  test('it should render when the showModal prop is true', () => {
    const wrapper = shallow(
      <Backdrop
        showModal
      />,
    );
    expect(wrapper.find('div')).toHaveLength(2);
  });
  test('it should not render the showModal prop is false', () => {
    const wrapper = shallow(
      <Backdrop showModal={false} />,
    );
    expect(wrapper.find('div')).toHaveLength(0);
  });
});
