import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color }) => {
  const btnClass = color === 'grey' ? `btn ${color}` : 'btn';
  return (
    <button
      type="button"
      className={btnClass}
    >
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Button;
