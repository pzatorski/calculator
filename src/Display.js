import React, { Component } from 'react';


class Display extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          border: '1px solid blue',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {this.props.displayValue}
      </div>
    );
  }
}

export default Display;
