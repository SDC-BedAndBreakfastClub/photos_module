/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import ModalPhoto from '../client/src/components/Modal/ModalPhoto/ModalPhoto';
import mockData from '../__mocks__/data/listing100.json';

describe('ModalPhoto Unit Tests', () => {
  test('the wrapper should exist', () => {
    const wrapper = shallow(<ModalPhoto photo={mockData[0]} />);
    expect(wrapper).toBeDefined();
  });
  test('it should display one photo', () => {
    const wrapper = shallow(<ModalPhoto photo={mockData[0]} />);
    expect(wrapper.find('.ModalPhoto')).toHaveLength(1);
  });
});
