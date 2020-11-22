import React from 'react'
import Game from './components/Game'

// Just create a seed file with a set of possible games to make it more fun, use a random game every restart.

const App = () =>
  <Game
    targetPosition={[9, 8]}
    availableCells={[
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
      [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
      [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    ]}
    startingPosition={[0, 0]}
    moveLimit={25}
    cellSize={80}
  />

export default App
