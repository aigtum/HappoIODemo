import React, { Component } from 'react';

var buttonStyle = {
  'default': {
    margin: '2px',
    borderRadius: '4px',
    backgroundColor: '#55A88F',
    color: '#FFFFFF',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #282c34',
  },
  'hovered': {
    margin: '2px',
    borderRadius: '4px',
    backgroundColor: '#346e5d',
    color: '#FFFFFF',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #282c34',
  }
};

var buttonHovered = false;

var alertTest = () => {
  alert("test!");
}

class Button extends Component {
    render() {
      return (
        <button
          onMouseEnter={() => {buttonHovered = true}} 
          onMouseLeave={() => buttonHovered = false}
          style={buttonHovered ? buttonStyle.hovered : buttonStyle.default}
          onClick={alertTest}>{this.props.label}</button>
      );
    }
}

export default Button;