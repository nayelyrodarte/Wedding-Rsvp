import React from 'react';
import App from '../components/App';
import {
  render,
  screen,
  fireEvent,
  waitForElement,
  getByText,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { server, rest } from '../testServer';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('Succesfully renders App component', () => {
  render(<App />);
});

describe('Form handling', () => {
  let submitButton;

  beforeEach(() => {
    render(<App />);

    submitButton = screen.getByRole('button', { name: /buscar/i });

    fireEvent.change(screen.getByLabelText(/Primer nombre:/), {
    target: { value: 'SERGIO' },
  });

  fireEvent.change(screen.getByLabelText(/Apellido paterno:/), {
    target: { value: 'DELGADO' },
  });

  fireEvent.change(screen.getByLabelText(/Teléfono/gi), {
    target: { value: '1234567891' },
  })}
)

test('Shows charging message when submit button is clicked', () => {
  fireEvent.click(submitButton);

  expect(screen.getByText(/Cargando.../)).toBeInTheDocument();
});

test("Shows checkboxes for guest's party when a guest is found", async () => {
  fireEvent.click(submitButton);

  await waitForElementToBeRemoved(() => screen.getByText(/Cargando.../));

  server.use(
    rest.get('api/guests', async (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  waitForElement(() => expect(screen.getByText('THEO').toBeInTheDocument()));
});

})

test.skip('Enables submit button when form is filled', () => {
  const button = screen.getByRole('button', { name: /buscar/i });

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