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
        <Button label="AC" operationPress={this.props.operationPress}/>
        <Button label="+/-" operationPress={this.props.operationPress}/>
        <Button label="%" operationPress={this.props.operationPress}/>
        <Button label="/" operationPress={this.props.operationPress}/>
        <Button label="7" numberPress={this.props.numberPress}/>
        <Button label="8" numberPress={this.props.numberPress}/>
        <Button label="9" numberPress={this.props.numberPress}/>
        <Button label="x" operationPress={this.props.operationPress}/>
        <Button label="4" numberPress={this.props.numberPress}/>
        <Button label="5" numberPress={this.props.numberPress}/>
        <Button label="6" numberPress={this.props.numberPress}/>
        <Button label="-" operationPress={this.props.operationPress}/>
        <Button label="1" numberPress={this.props.numberPress}/>
        <Button label="2" numberPress={this.props.numberPress}/>
        <Button label="3" numberPress={this.props.numberPress}/>
        <Button label="+" operationPress={this.props.operationPress}/>
        <Button label="0" numberPress={this.props.numberPress}/>
        <Button label="" />
        <Button label="." operationPress={this.props.operationPress}/>
        <Button label="=" operationPress={this.props.operationPress}/>
      </div>
    )
  }
}

export default ButtonContainer;
