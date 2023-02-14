//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import App from './App';

//it('renders without crashing', () => {
//  const div = document.createElement('div');
//  ReactDOM.createRoot(div).render(<App />);
//});
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App').default;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.createRoot(div).render(React.createElement(App));
});
