import React from 'react';
import Home from './pages/Home.jsx';
import './App.scss'

function App() {
  //let vh = window.innerHeight * 0.01;
  //document.documentElement.style.setProperty('--vh', `${vh}px`);
  //let vw = window.innerWidth * 0.01;
  //document.documentElement.style.setProperty('--vw', `${vw}px`);
  
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
