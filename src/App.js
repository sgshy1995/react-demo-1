import logo from './logo.svg';
import './App.css';
import React from 'react';
import CustomFunction from './CustomFunction'
import CustomClass from './CustomClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomFunction n={0} numbers={[1,2,3,4,5,'hello']} />
        <CustomClass n={0} numbers={[1,2,3,4,5,'hello']} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
