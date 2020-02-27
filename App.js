import React, { Component } from 'react';
import Router from './Router'
//import "./src/config/statusBarConfig";

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <Router></Router>
    )
  }
}

export default App

