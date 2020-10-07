import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../components/Form';

test.skip('renders Form component', () => {
  render(<Form />);
});

test.skip('Enables submit button when form is filled', () => {
  render(<Form />);

  const button = screen.getByRole('button');

  expect(button).toBeDisabled();

  fireEvent.change(screen.getByLabelText(/Primer nombre:/), {
    target: { value: 'SERGIO' },
  });

  fireEvent.change(screen.getByLabelText(/Apellido paterno:/), {
    target: { value: 'DELGADO' },
  });

  fireEvent.change(screen.getByLabelText(/Teléfono/gi), {
    target: { value: '1234567891' },
  });

  expect(button).toBeEnabled();
});
