import { useState } from 'react';
import './App.css';
import Calculation from './Calculation';

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [tipocalculo, setTipoCalculo] = useState("+");
  let resultado = 0;

  function input1EnteredHandler(event){
      setA(parseInt(event.target.value));
      
  };
  function input2EnteredHandler(event){
      setB(parseInt(event.target.value));
      
  };
  function tipoCalculoEnteredHandler(event){
      setTipoCalculo(event.target.value);
      
  }
 
    if(tipocalculo === "+"){
      resultado = parseInt(a) + parseInt(b);
    }else if(tipocalculo==="-"){
      resultado = parseInt(a) - parseInt(b);
    }else if(tipocalculo==="*"){
      resultado = parseInt(a) * parseInt(b);
    }else if(tipocalculo==="/"){
      resultado = parseInt(a) / parseInt(b);
    }
  

  return (
    <div>
      <Calculation tipocalculo={tipocalculo} input1EnteredHandler={input1EnteredHandler} input2EnteredHandler={input2EnteredHandler} tipoCalculoEnteredHandler={tipoCalculoEnteredHandler}/>
      <text>Resutlado: {resultado}</text>
    </div>
  );
};

export default App;
