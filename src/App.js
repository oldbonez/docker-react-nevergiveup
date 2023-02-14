// current
//
//----------------------------------------
//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

//class App extends Component {
//  render() {
//   return (
//      <div className="App">
//        <div className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h2>Welcome to React!</h2>
//        </div>
//        <p className="App-intro">
//          bye there
//        </p>
//      </div>
//    );
//  }
//}
//
//export default App;
//-------------------cut-----------
const React = require('react');
const { Component } = React;
const logo = require('./logo.svg');
require('./App.css');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          bye there
        </p>
      </div>
    );
  }
}

module.exports = App;

