import React, { Component } from 'react';
import Button from './Button';

class ButtonContainer extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 5,
          border: '1px solid red',
          flexWrap: 'wrap'
        }}
      >
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="x" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="" />
        <Button label="." />
        <Button label="=" />
      </div>
    )
  }
}

export default ButtonContainer;
