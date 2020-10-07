import React from 'react';
import App from '../components/App';
import {
  render,
  screen,
  fireEvent,
  waitForElement,
  getByText,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { server, rest } from '../testServer';

test('Succesfully renders App component', () => {
  render(<App />);
});

beforeEach(() => render(<App />));

test('Shows charging message when submit button is clicked', () => {
  const button = screen.getByText('Buscar');

  fireEvent.change(screen.getByLabelText(/Primer nombre:/), {
    target: { value: 'SERGIO' },
  });

  fireEvent.change(screen.getByLabelText(/Apellido paterno:/), {
    target: { value: 'DELGADO' },
  });

  fireEvent.change(screen.getByLabelText(/Teléfono/gi), {
    target: { value: '1234567891' },
  });

  fireEvent.click(button);

  expect(screen.getByText(/Cargando.../)).toBeInTheDocument();
});

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Database requests', () => {
  test("Shows checkboxes for guest's party when a guest is found in database", async () => {
    const button = screen.getByRole('button', { name: /buscar/i });

    fireEvent.change(screen.getByLabelText(/Primer nombre:/), {
      target: { value: 'SERGIO' },
    });

    fireEvent.change(screen.getByLabelText(/Apellido paterno:/), {
      target: { value: 'DELGADO' },
    });

    fireEvent.change(screen.getByLabelText(/Teléfono/gi), {
      target: { value: '1234567891' },
    });

    fireEvent.click(button);

    // server.use(
    //   rest.get('api/guests', async (req, res, ctx) => {
    //     return res(ctx.status(500));
    //   })
    // );

    screen.debug();

    // await waitForElement(() =>
    //   expect(screen.getByText('THEO').toBeInTheDocument())
    // );

    // screen.debug();
  });
});
