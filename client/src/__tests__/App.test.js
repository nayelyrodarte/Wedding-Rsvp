import React from 'react';
import App from '../components/App';
import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Renders App component', () => {
  render(<App />);
});
