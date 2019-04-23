import React, { Component } from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class Button extends Component {
    render() {
      return (
        <button
          className="primary"
          style={buttonStyle}
          onClick={this.props.handleClick}>{this.props.label}</button>
      );
    }
}

export default Button;