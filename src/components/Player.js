import React from 'react'
import PropTypes from 'prop-types';

const Player = ({ image, name }) => {
  return <img height="100%" src={image} alt={name} />
}

Player.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
}

export default Player
