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
  test('it should toggle the isHeroHovered value in state when the mouse enters the component', () => {
    wrapper.simulate('mouseenter');
    expect(wrapper.state(['isHeroHovered'])).toBe(true);
  });
  test('it should toggle the isHeroHovered value in state when the mouse leaves the component', () => {
    wrapper.simulate('mouseenter');
    wrapper.simulate('mouseleave');
    expect(wrapper.state(['isHeroHovered'])).toBe(false);
  });
  test('it should update the currentHoveredPhoto value in state when updateCurrentHovered is triggered', () => {
    wrapper.instance().updateCurrentHovered(3);
    expect(wrapper.state(['currentHoveredPhoto'])).toEqual(3);
  });
  test('it should toggle the showModal property in state when showModalHandler is triggered', () => {
    wrapper.instance().showModalHandler(true);
    expect(wrapper.state(['showModal'])).toBe(true);
    wrapper.instance().showModalHandler(false);
    expect(wrapper.state(['showModal'])).toBe(false);
  });
});
