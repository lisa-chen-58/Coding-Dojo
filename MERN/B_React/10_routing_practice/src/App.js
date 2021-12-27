import React from 'react';
import './App.css';

import {Router} from '@reach/router';
import Home from './components/Home';
import HelloColor from './components/HelloColor';
import Hello from './components/Hello';
import Number from './components/Number';


function App() {
  return(
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Hello path="/hello"/>
        <Number path="/number/:num"/>
        <HelloColor path="/:word/:fontColor/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;