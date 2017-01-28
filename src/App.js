import React, { Component } from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

class App extends Component {
  state = {
    display: ''
  };

  add = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
  }

  minus = (numberOne, numberTwo) => {
    return numberOne - numberTwo;
  }

  multiple = (numberOne, numberTwo) => {
    return numberOne * numberTwo;
  }

  divide = (numberOne, numberTwo) => {
    return numberOne / numberTwo;
  }

  handleNumberPress = (value) => {
    this.setState((prevState) => ({
      display: `${prevState.display}${value}`
    }))
  }

  handleOperationPress = (value) => {
    if (value === 'AC') {
      this.setState({
        display: ''
      })
    }

  }

  render() {

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid black',
          height: 617,
          width: 410,
        }}
      >
        <Display displayValue={this.state.display}/>

        <ButtonContainer
          numberPress={this.handleNumberPress}
          operationPress={this.handleOperationPress}
        />
      </div>
    );
  }
}

export default App;
