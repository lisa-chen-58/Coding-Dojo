import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [toDo, setToDo] = useState([]);
  return (
    <div className="App">
      <Form 
        toDo={toDo}
        setToDo={setToDo} />
      <Display 
        toDo={toDo}
        setToDo={setToDo}
      />
    </div>
  );
}

export default App;
