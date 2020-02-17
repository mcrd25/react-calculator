import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ButtonPanel = (props) => {
  const groups = [
    ['AC', '+/-', '%', String.fromCharCode(247)],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const { clickHandler } = props;
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
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
                clickHandler={handleClick}
              />
            ))
          }
        </div>
      ))}
    </div>
  );
};

ButtonPanel.protoTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
