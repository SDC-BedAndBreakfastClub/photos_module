/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('App Component Unit Tests', () => {
  test('wrapper exists', () => {
    expect(wrapper.find('.container')).toBeDefined();
  });
  test('it has the correct initialized state prior to componentDidMount', () => {
    expect(wrapper.state(['photos'])).toEqual([]);
  });
  test('it should toggle the isHeroHovered key in state when the mouse enters the component', () => {
    wrapper.simulate('mouseEnter');
    expect(wrapper.state(['isHeroHovered'])).toBe(true);
  });
});
