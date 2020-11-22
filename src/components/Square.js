import React from 'react'

const Square = ({ cellSize, isAvailable, children, isStartingPosition, isTargetPosition }) => {
  let backgroundColor
  backgroundColor = isAvailable ? 'white' : '#cccccc'
  backgroundColor = isStartingPosition ? 'yellow' : backgroundColor
  backgroundColor = isTargetPosition ? 'green' : backgroundColor

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #959595',
    background: backgroundColor,
    padding: '4px',
    boxSizing: 'border-box',
    height: cellSize,
    width: cellSize,
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Square
