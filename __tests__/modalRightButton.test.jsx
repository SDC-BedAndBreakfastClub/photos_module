/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import ModalRightButton from '../client/src/components/Modal/ModalRightButton/ModalRightButton';

describe('ModalRightButton Unit Tests', () => {
  test('ModalRightButton Wrapper Exists', () => {
    const wrapper = shallow(<ModalRightButton nextPhotoHandler={() => {}} />);
    expect(wrapper).toBeDefined();
  });
  test('it should invoke the nextPhotoHandler when clicked', () => {
    const nextPhotoHandler = jest.fn();
    const wrapper = shallow(<ModalRightButton nextPhotoHandler={nextPhotoHandler} />);
    wrapper.find('button').simulate('click');
    expect(nextPhotoHandler).toBeCalledTimes(1);
  });
});
