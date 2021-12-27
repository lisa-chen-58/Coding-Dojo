import React, {useState } from 'react';
import Display from './components/Display';
import './App.css';


function App() {
  const [State, setState] = useState([])
  return (
    <div className="App">
      <h1>This is the Pokemon Assignment - only lists 870 Pokemon</h1>
      <Display 
        State={State}
        setState={setState} />
    </div>
  );
}

export default App;