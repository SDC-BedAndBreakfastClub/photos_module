/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import ModalCloseButton from '../client/src/components/Modal/ModalCloseButton/ModalCloseButton';

let showModalHandler;
let wrapper;

beforeEach(() => {
  showModalHandler = jest.fn();
  wrapper = shallow(<ModalCloseButton showModalHandler={showModalHandler} />);
});

describe('ModalCloseButton Unit Tests', () => {
  test('the wrapper should exist', () => {
    expect(wrapper).toBeDefined();
  });
  test('it should invoke the showModalHandler when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(showModalHandler).toBeCalledTimes(1);
  });
});
