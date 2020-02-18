import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => ({ calculator: calculate(prevState.calculator, buttonName) }));
  }

  render() {
    const {
      calculator,
    } = this.state;
    return (
      <div className="calculator">
        <div className="display-container">
          <Display value={calculator.next || calculator.total || '0'} />
        </div>
        <div className="panel-container">
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
