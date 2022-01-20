const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./app');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);