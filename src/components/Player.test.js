import { render, screen } from '@testing-library/react';
import Player from './Player';


test('renders player component', () => {
  const props = {
    src: 'some-image-assets',
    name: 'some-name-in-alt'
  }

  render(<Player { ...props } />);
  const player = screen.getByAltText(/some-name-in-alt/i);

  expect(player).toBeInTheDocument();
});
