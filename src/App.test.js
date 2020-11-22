import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Movements Left/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders player component', () => {
  render(<App />);
  const player = screen.getByAltText(/player/i);
  expect(player).toBeInTheDocument();
});


test('renders target component', () => {
  render(<App />);
  const target = screen.getByAltText(/target/i);
  expect(target).toBeInTheDocument();
});
