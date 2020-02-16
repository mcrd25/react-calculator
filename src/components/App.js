import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div className="display-container">
          <Display />
        </div>
        <div className="panel-container">
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
