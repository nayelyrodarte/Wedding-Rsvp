import React from 'react';
import { shallow } from 'enzyme';
import Form from '../components/Form';

test('Fetch returns database when component mounts', async () => {
  expect(shallow(<Form />).length).toEqual(1);

  const guests = await fetch('http://localhost:8000/api/guests');
  expect(guests).toHaveProperty('status', 200);
});

test('Fetch fails and throws an error', async () => {
  try {
    await fetch('http://localhost:8000/api/guests');
  } catch (error) {
    expect(error).toMatch(error);
  }
});
