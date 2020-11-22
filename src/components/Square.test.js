import { render, screen } from '@testing-library/react';
import Square from './Square';


test('renders available square', () => {
  const props = {
    cellSize: 30,
    isAvailable: 1,
    children: 'Some',
    isStartingPosition: false,
    isTargetPosition: false
  }

  render(<Square { ...props } />);
  const square = screen.getByText(/Some/i);

  expect(square).toHaveClass('available');
});

test('renders unavailable square', () => {
  const props = {
    cellSize: 30,
    isAvailable: 0,
    children: 'Some',
    isStartingPosition: false,
    isTargetPosition: false
  }

  render(<Square { ...props } />);
  const square = screen.getByText(/Some/i);

  expect(square).toHaveClass('unavailable');
});

test('renders starting square', () => {
  const props = {
    cellSize: 30,
    isAvailable: 0,
    children: 'Some',
    isStartingPosition: true,
    isTargetPosition: false
  }

  render(<Square { ...props } />);
  const square = screen.getByText(/Some/i);

  expect(square).toHaveClass('starting');
});

test('renders target square', () => {
  const props = {
    cellSize: 30,
    isAvailable: 0,
    children: 'Some',
    isStartingPosition: false,
    isTargetPosition: true
  }

  render(<Square { ...props } />);
  const square = screen.getByText(/Some/i);

  expect(square).toHaveClass('target');
});

