import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('App renders without crashing', () => {
  expect(shallow(<App />).length).toEqual(1);
});
