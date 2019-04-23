import React, { Component } from 'react';

import './App.css';
import Button from './components/myButton';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <body>
          <p>The following page is a demo for Happo.io, a screenshot based testing platform for user interfaces.</p>
          <Button label="Click me!"/>
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
