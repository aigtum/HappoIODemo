import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import MainCompoment from './components/main';

const styles = {
  'app': {
    textAlign: 'center',
      
  }
}

class App extends Component {
  render() {
    return (
        <div style={styles.app}>
          <Header/>
          
          <MainCompoment/>
          
          <Footer/>
        </div>
    );
  }
}

export default App;
