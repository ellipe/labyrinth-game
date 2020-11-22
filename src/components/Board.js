import React from 'react'
import PropTypes from 'prop-types';

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
  const [rows, columns] = [
    availableCells ? availableCells.length : 0,
    availableCells && availableCells[0] ? availableCells[0].length : 0,
  ]
  const style = {
    board: {
      margin: '0 auto',
      display: 'grid',
      gridTemplate: `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`,
    },
  }
  const cells = (availableCells || []).map((row, yPos) =>
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
          {isPlayerPosition ? <Player image={pacman} name={'player'} /> : null}
          {isTargetPosition ? <Player image={ghost} name={'target'} /> : null}
        </Square>
      )
    })
  )
  return (
    <div style={style.board}>
      {cells.length ? cells : <strong>Bad Configuration</strong>}
    </div>
  )
}

Board.propTypes = {
  availableCells : PropTypes.array,
  cellSize: PropTypes.number,
  playerPosition: PropTypes.array,
  startingPosition: PropTypes.array,
  targetPosition: PropTypes.array,
}

export default Board
