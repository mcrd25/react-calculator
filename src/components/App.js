import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    this.setState((prevState) => calculate(prevState, buttonName));
  }

  render() {
    const { total, next } = this.setState;
    return (
      <div className="calculator">
        <div className="display-container">
          <Display value={next || total || 0} />
        </div>
        <div className="panel-container">
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
