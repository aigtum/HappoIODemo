import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';


var secret = process.env.REACT_APP_KEY;

class App extends Component {
  render() {
    console.log(secret);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
          <Button label="Click me!"/>
        </header>
        <body>
        </body>
      </div>
    );
  }
}

export default App;
