import React, { Component } from 'react';

import './App.css';
import Header from './components/header.jsx';
import Button from './components/myButton';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <p>The following page is a demo for Happo.io, a screenshot based testing platform for user interfaces.</p>
          <Button label="Click me!"/>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
