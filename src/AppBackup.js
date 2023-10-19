import { useState } from 'react';
import './App.css';
import Calculos from './Calculos.js';
import Calculosprueba from './Calculosprueba';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [tipocalculo, setTipoCalculo] = useState("+");


  function input1EnteredHandler(event){
      setA(parseInt(event.target.value));
  };
  function input2EnteredHandler(event){

      setB(parseInt(event.target.value));
  };
  function tipoCalculoEnteredHandler(event){
      const nuevoTipoCalculo = event.target.value;
      setTipoCalculo(nuevoTipoCalculo);
  }
  //<Calculos a={a} b={b} tipocalculo={tipocalculo} />

  return (
    <div>
      <input type="number" value={a} onChange={input1EnteredHandler}/>
      <select value={tipocalculo} onChange={tipoCalculoEnteredHandler}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
      </select>
      <input type="number" value={b} onChange={input2EnteredHandler}/>
      <text>=</text>
      <Calculosprueba />
    </div>
  );
};

export default App;
