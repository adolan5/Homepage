/**
 * Main homepage entry.
 * Kicks off initial rendering of our application's React components.
 */

'use strict';

// Bring in React dependencies
const React = require('react');
const ReactDOM = require('react-dom');
// Bring in main app container component (top level component)
const App = require('./app');

// Simply call the DOM render to start things off.
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
