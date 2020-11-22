import { render, screen } from '@testing-library/react';
import Board from './Board';


test('renders a bad board component', () => {
  const props = {
    availableCells: [],
    cellSize: 0,
    playerPosition: [0,0],
    startingPosition: [0,0],
    targetPosition:[0,0]
  }

  render(<Board { ...props } />);
  const player = screen.getByText(/Bad Configuration/i);

  expect(player).toBeInTheDocument();
});

test('renders a good board component', () => {
  const props = {
    availableCells: [
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
      [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    ],
    cellSize: 30,
    playerPosition: [0,0],
    startingPosition: [0,0],
    targetPosition:[9,8]
  }

  const { container } = render(<Board { ...props } />);

  expect(container.getElementsByClassName('available').length).toEqual(45);
  expect(container.getElementsByClassName('unavailable').length).toEqual(43);
  expect(container.getElementsByClassName('starting').length).toEqual(1);
  expect(container.getElementsByClassName('target').length).toEqual(1);
});

