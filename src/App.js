import React from 'react'
import Game from './components/Game'
// import './styles.css'

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
