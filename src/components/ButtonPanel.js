import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const rows = [
    ['AC', '+/-', '%', '+'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];
  return (
    <div className="button-panel">
      {rows.forEach((row) => (
        <div className="panel-row">
          {
                row.map((buttonName) => (
                  <Button
                    name={buttonName}
                    key={buttonName}
                  />
                ))
              }
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
