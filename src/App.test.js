import { render, screen } from '@testing-library/react';
import App from './App';

test('renders try again', () => {
  render(<App />);
  const linkElement = screen.getByText(/try again/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders try again', () => {
  render(<App />);
  const linkElement = screen.getByText(/try again/i);
  expect(linkElement).toBeInTheDocument();
});