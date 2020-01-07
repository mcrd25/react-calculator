import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';


function Title(props) {
  const { value } = props;
  return (
    <h1>{value}</h1>
  );
}
Title.propTypes = {
  value: PropTypes.string.isRequired,
};
ReactDOM.render(<Title value="My React Calculator" />, document.getElementById('root'));
