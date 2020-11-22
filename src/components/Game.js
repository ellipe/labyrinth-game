import React from 'react'
import PropTypes from 'prop-types';
import './Game.css'

import Board from './Board'



class Game extends React.Component {
  state = {
    // setting starting values. Changing props will not update the state here.
    playerPosition: this.props.startingPosition,
    targetPosition: this.props.targetPosition,
    moveLimit: this.props.moveLimit,
    gameStatus: null,
  }

  // Just for fun =)
  winAudio = new Audio('/win.mp3')
  defeatAudio = new Audio('/defeat.mp3')

  playMovement = nextMove => {
    if (
      this.validateBoundaries(nextMove) &&
      this.isEmptySquare(nextMove) &&
      this.state.gameStatus === null
    ) {
      this.setState({
        playerPosition: nextMove,
        moveLimit: this.state.moveLimit - 1,
      })

    }
    this.validateMatch()
  }

  validateBoundaries = ([x, y]) => {
    return (
      x >= 0 &&
      x <= this.props.availableCells[0].length - 1 &&
      (y >= 0 && y <= this.props.availableCells.length - 1)
    )
  }

  isEmptySquare = ([x, y]) => {
    return this.props.availableCells[y][x]
  }

  validateMatch = () => {
    if (this.state.playerPosition == '' + this.state.targetPosition) {
      this.setState({
        gameStatus: 1,
      })
      this.winAudio.play()
      return
    }
    if (this.state.moveLimit === 0) {
      this.setState({
        gameStatus: 0,
      })
      this.defeatAudio.play()
      return
    }
  }

  restartGame = () => {
    this.setState({
      playerPosition: this.props.startingPosition,
      targetPosition: this.props.targetPosition,
      moveLimit: this.props.moveLimit,
      gameStatus: null,
    })
    this.winAudio.pause()
    this.defeatAudio.pause()
    this.winAudio.currentTime = 0;
    this.defeatAudio.currentTime = 0;
  }

  renderGameStatus = () => {
    return this.state.gameStatus ? 'You Win!' : 'Ohhh, You Loose'
  }

  handleMovement = e => {
    switch (e.key) {
      case 'ArrowUp':
        const moveUp = [
          this.state.playerPosition[0],
          this.state.playerPosition[1] - 1,
        ]
        this.playMovement(moveUp)
        break

      case 'ArrowDown':
        const moveDown = [
          this.state.playerPosition[0],
          this.state.playerPosition[1] + 1,
        ]
        this.playMovement(moveDown)
        break

      case 'ArrowLeft':
        const moveLeft = [
          this.state.playerPosition[0] - 1,
          this.state.playerPosition[1],
        ]
        this.playMovement(moveLeft)
        break

      case 'ArrowRight':
        const moveRight = [
          this.state.playerPosition[0] + 1,
          this.state.playerPosition[1],
        ]
        this.playMovement(moveRight)
        break

      default:
        break
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleMovement, false)
    // this.movementAudio.playbackRate = 1.3
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey, false)
  }

  render() {
    return (
      <div>
        <div>
          <div className='message'>
            {this.state.moveLimit <= 0 || this.state.gameStatus !== null
              ? this.renderGameStatus()
              : 'In Progress'}
          </div>
          <div className='top-board'>
            <span>
              Movements Left: {this.state.moveLimit}
            </span>
            <input
              type="button"
              value="Restart Game"
              onClick={this.restartGame}
            />
          </div>
        </div>
        <Board
          availableCells={this.props.availableCells}
          cellSize={this.props.cellSize}
          playerPosition={this.state.playerPosition}
          startingPosition={this.props.startingPosition}
          targetPosition={this.props.targetPosition}
        />
      </div>
    )
  }
}

Game.propTypes = {
  targetPosition: PropTypes.array,
  availableCells: PropTypes.array,
  startingPosition: PropTypes.array,
  moveLimit: PropTypes.number,
  cellSize : PropTypes.number
}

export default Game
