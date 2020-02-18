import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  let btnClass = color ? 'btn grey' : 'btn';

  if (wide) btnClass += ' wide';

  return (
    <button
      type="button"
      className={btnClass}
      onClick={
        () => clickHandler(name)
      }
    >
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
