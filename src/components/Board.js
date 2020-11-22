import React from 'react'
import Square from './Square'
import Player from './Player'

import pacman from '../assets/images/pacman.png'
import ghost from '../assets/images/ghost.png'

const Board = ({
  availableCells,
  cellSize,
  playerPosition,
  startingPosition,
  targetPosition,
}) => {
  const [rows, columns] = [availableCells.length, availableCells[0].length]
  const style = {
    board: {
      margin: '0 auto',
      display: 'grid',
      gridTemplate: `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`,
    },
  }
  const cells = availableCells.map((row, yPos) =>
    row.map((cell, xPos) => {
      // Using this shorthand unsafe comparison to avoid using lodash or a more complex comparison formula.
      const isPlayerPosition = playerPosition == '' + [xPos, yPos]
      const isTargetPosition = targetPosition == '' + [xPos, yPos]
      const isStartingPosition = startingPosition == '' + [xPos, yPos]

      return (
        <Square
          key={`${xPos}-${yPos}`}
          cellSize={cellSize}
          isAvailable={cell}
          isTargetPosition={isTargetPosition}
          isStartingPosition={isStartingPosition}
        >
          {/* At the end the ghost never get caught =) */}
          {isPlayerPosition ?  <Player image={pacman} name={'player'}/> : null}
          {isTargetPosition ?  <Player image={ghost} name={'target'}/> : null}
        </Square>
      )
    })
  )
  return (
    <div style={style.board}>
      {cells}
    </div>
  )
}

export default Board
