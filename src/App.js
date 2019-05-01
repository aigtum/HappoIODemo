import React, { Component } from 'react';

import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import SimpleExpansionPanel from './components/expansion-panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SimpleExpansionPanel/>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
