import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import PhoneBookPage from './PhoneBookPage'

beforeEach(() => {
  render(<PhoneBookPage />)
});

test('contact title is rendered', () => {
  const title = screen.getByText('Contacts')
  expect(title).toBeInTheDocument();
})
