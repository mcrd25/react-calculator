import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <div className="calc-display">
    {value}
  </div>
);

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
