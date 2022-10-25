import { render, screen } from '@testing-library/react';
import App from './App';

test('phone book app title', () => {
  render(<App />);
  const title = screen.getByText(/Phone Book App/i);
  expect(title).toBeInTheDocument();
});
