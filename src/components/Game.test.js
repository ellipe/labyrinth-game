import { render, screen } from '@testing-library/react';
import Game from './Game';


test('renders Game With Restart Button', () => {
  const props = {
    src: 'some-image-assets',
    name: 'some-name-in-alt'
  }

  render(<Game { ...props } />);
  const game = screen.getByText(/Restart Game/i);
  const movement = screen.getByText(/Movements Left/i);

  expect(game).toBeInTheDocument();
  expect(movement).toBeInTheDocument();
});
