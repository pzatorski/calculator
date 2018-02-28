import React, { Component } from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

class App extends Component {
  state = {
    display: '',
    firstValue: '',
    operatorPressed: ''
  };

  add = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
  };

  minus = (numberOne, numberTwo) => {
    return numberOne - numberTwo;
  };

  multiple = (numberOne, numberTwo) => {
    return numberOne * numberTwo;
  };

  divide = (numberOne, numberTwo) => {
    return numberOne / numberTwo;
  };

  handleNumberPress = value => {
    this.setState(prevState => ({
      display: `${prevState.display}${value}`
    }));
  };

  handleOperationPress = value => {
    if (value === 'AC') {
      this.setState({
        display: ''
      });
    }
    if (value === '+/-') {
      if (this.state.firstValue < 0) {
        this.setState({
          firstValue: parseInt(this.state.display, 10),
          operatorPressed: '',
          display: this.state.firstValue
        });
      }
      this.setState({
        firstValue: parseInt(-this.state.display, 10),
        operatorPressed: '+/-',
        display: -this.state.display
      });
    }
    if (value === '+') {
      this.setState({
        firstValue: parseInt(this.state.display, 10),
        operatorPressed: '+',
        display: ''
      });
    }
    if (value === '-') {
      this.setState({
        firstValue: parseInt(this.state.display, 10),
        operatorPressed: '-',
        display: ''
      });
    }
    if (value === 'x') {
      this.setState({
        firstValue: parseInt(this.state.display, 10),
        operatorPressed: 'x',
        display: ''
      });
    }
    if (value === '/') {
      this.setState({
        firstValue: parseInt(this.state.display, 10),
        operatorPressed: '/',
        display: ''
      });
    }
    if (value === '=') {
      if (this.state.operatorPressed === '+') {
        this.setState({
          display: this.add(
            this.state.firstValue,
            parseInt(this.state.display, 10)
          )
        });
      }
      if (this.state.operatorPressed === '-') {
        this.setState({
          display: this.minus(
            this.state.firstValue,
            parseInt(this.state.display, 10)
          )
        });
      }
      if (this.state.operatorPressed === 'x') {
        this.setState({
          display: this.multiple(
            this.state.firstValue,
            parseInt(this.state.display, 10)
          )
        });
      }
      if (this.state.operatorPressed === '/') {
        this.setState({
          display: this.divide(
            this.state.firstValue,
            parseInt(this.state.display, 10)
          )
        });
      }
    }
  };
  render() {
    console.log(this.state);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid black',
          height: 617,
          width: 410
        }}
      >
        <Display displayValue={this.state.display} />

        <ButtonContainer
          numberPress={this.handleNumberPress}
          operationPress={this.handleOperationPress}
        />
      </div>
    );
  }
}

export default App;
