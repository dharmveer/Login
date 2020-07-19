import React, { Component } from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Listing from './component/Listing';
import Auth from './component/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home />
          <About />
          <Listing />
          <Auth />
      </div>
    );
  }
}

export default App;
