import React, { Component } from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

class App extends Component {
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
        <Display />

        <ButtonContainer />
      </div>
    );
  }
}

export default App;
