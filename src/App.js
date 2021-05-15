import './App.css';
import React, {useState} from 'react';
import FComponent from './FComponent';
import CComponent from './CComponent';
import { CounterContext } from './CounterContext';

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App border">
      <h1>Use Context</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    
      <hr></hr>
      <CounterContext.Provider value={{counter, setCounter}}>
      <FComponent/>
      <hr></hr>
      <CComponent/>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
