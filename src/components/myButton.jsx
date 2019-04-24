import React, { Component } from 'react';

var alertTest = () => {
  alert("test!");
}

class Button extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        hovering : false
    };
}
  render() {
    const style = {
      margin: '3px',
      borderRadius: '5px',
      backgroundColor: this.state.hovering ? '#346e5d' : '#55A88F',
      color: '#FFFFFF',
      padding: '10px',
      fontSize: '16px',
      border: '2px solid #282c34',
    };
    
    const handleMouseEnter = () => this.setState({hovering : true});
    const handleMouseLeave = () => this.setState({hovering : false});
    return (
      <button
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={alertTest}>{this.props.label}</button>
    );
  }
}

export default Button;