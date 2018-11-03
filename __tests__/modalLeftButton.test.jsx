/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import ModalLeftButton from '../client/src/components/Modal/ModalLeftButton/ModalLeftButton'

describe('ModalLeftButton Unit Tests', () => {
  test('ModalLeftButton Wrapper Exists', () => {
    const wrapper = shallow(<ModalLeftButton prevPhotoHandler={() => {}} />);
    expect(wrapper).toBeDefined();
  });
  test('it should invoke the prevPhotoHandler when clicked', () => {
    const prevPhotoHandler = jest.fn();
    const wrapper = shallow(<ModalLeftButton prevPhotoHandler={prevPhotoHandler} />);
    wrapper.find('button').simulate('click');
    expect(prevPhotoHandler).toBeCalledTimes(1);
  });
});
