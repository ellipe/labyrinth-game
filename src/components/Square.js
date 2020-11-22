import React from 'react'
import PropTypes from 'prop-types';
import './Square.css';

const Square = ({ cellSize, isAvailable, children, isStartingPosition, isTargetPosition }) => {
  let className
  className = isAvailable ? 'available' : 'unavailable'
  className = isStartingPosition ? 'starting' : className
  className = isTargetPosition ? 'target' : className

  const style = {
    height: cellSize,
    width: cellSize,
  }
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

Square.propTypes = {
  cellSize: PropTypes.number,
  isAvailable: PropTypes.number,
  children: PropTypes.any,
  isStartingPosition: PropTypes.bool,
  isTargetPosition: PropTypes.bool
}

export default Square
