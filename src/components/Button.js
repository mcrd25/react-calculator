import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  let btnClass = color === 'grey' ? `btn ${color}` : 'btn';

  if (wide) btnClass += ' wide';

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
  wide: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
