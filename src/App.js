import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message.jsx'
import Welcome from './Welcome.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message />
        <Welcome text="Hello World on Welcome"/>
      </header>
    </div>
  );
}

export default App;
