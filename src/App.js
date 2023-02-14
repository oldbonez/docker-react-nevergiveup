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
//
//commonjs without jsx
const React = require('react');
const { Component } = React;
const logo = require('./logo.svg');
require('./App.css');

class App extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(
        'div',
        { className: 'App-header' },
        React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
        React.createElement('h2', null, 'Welcome to React!')
      ),
      React.createElement('p', { className: 'App-intro' }, 'bye there')
    );
  }
}

module.exports = App;
//
//end of commonjs without jsx
//

//
//commonjs with jsx
//
//----code start-------------------
//const React = require('react');
//const { Component } = React;
//const logo = require('./logo.svg');
//require('./App.css');
//
//class App extends Component {
// render() {
//    return (
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
//module.exports = App;
//
//----end of commonjs with jsx
//
//------------------
//
// plain js
//-----------------
//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//
//class App extends Component {
//  render() {
//    const appDiv = document.createElement('div');
//    appDiv.classList.add('App');
//
//    const appHeaderDiv = document.createElement('div');
//    appHeaderDiv.classList.add('App-header');
//    appDiv.appendChild(appHeaderDiv);
//
//    const img = document.createElement('img');
//    img.setAttribute('src', logo);
//    img.classList.add('App-logo');
//    img.setAttribute('alt', 'logo');
//    appHeaderDiv.appendChild(img);
//
//    const h2 = document.createElement('h2');
//    h2.textContent = 'Welcome to React!';
//    appHeaderDiv.appendChild(h2);
//
//    const p = document.createElement('p');
//    p.classList.add('App-intro');
//    p.textContent = 'bye there';
//    appDiv.appendChild(p);
//
//    return appDiv;
//  }
//}
//---end of plain js
