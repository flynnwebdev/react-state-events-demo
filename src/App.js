import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick(e) {
    e.preventDefault()
    console.log('Link was clicked')
  }
  return (
    <div>
      <a href="" onClick={handleClick}>
        Click Me!
    </a>
    </div>
  );
}

export default App;
