import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const groups = [
    ['AC', '+/-', '%', String.fromCharCode(247)],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="button-panel">
      {groups.map(group => (
        <div key={group} className="panel-row">
          {
            group.map((buttonName, index, arr) => (
              <Button
                name={buttonName}
                color={index !== arr.length - 1}
                wide={buttonName === '0'}
                key={buttonName}
                clickHandler={clickHandler}
              />
            ))
          }
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
