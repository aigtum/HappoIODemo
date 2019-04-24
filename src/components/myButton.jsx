import React, { Component } from 'react';
import '../App.css';


var alertTest = () => {
  alert("test!");
}

class Button extends Component {
  render() {
      return (
        <button
          className="primary"
          onClick={alertTest}>{this.props.label}</button>
      );
    }
}

export default Button;