import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    console.log(this.props.label)
  }

  render() {
    return(
      <div
        style={{
          display: 'flex',
          border: '1px solid green',
          height: 100,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={this.handleClick}
      >
        <h3>{this.props.label}</h3>
      </div>
    )
  }
}

export default Button;
