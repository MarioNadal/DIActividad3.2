import { useState } from 'react';
import './App.css';
import Calculos from './Calculos.js';

function App() {
  const[a] = useState(0);
  const[b] = useState(0);


  return (
    <div>
      <Calculos a={a} b={b} />
    </div>
  );
};

export default App;
