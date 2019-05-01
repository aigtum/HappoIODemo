import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import SimpleExpansionPanel from './components/expansion-panel';

const styles = {
  'app': {
      textAlign: 'center',
      
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <header>
          <Header/>
        </header>
        <SimpleExpansionPanel/>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
