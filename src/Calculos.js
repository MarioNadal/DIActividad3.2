import React, { useState } from 'react';

function Calculos({a,b}) {
    const [tipocalculo, setTipoCalculo] = useState("+");
    const [valorA, setValorA] = useState(a);
    const [valorB, serValorB] = useState(b);
    const [resultado, setResultado] = useState(0);

    function input1EnteredHandler(event){
        const nuevoValorA = parseInt(event.target.value);
        setValorA(nuevoValorA);
        hacerCalculo(nuevoValorA, valorB, tipocalculo);
    };
    function input2EnteredHandler(event){
        const nuevoValorB = parseInt(event.target.value);
        serValorB(nuevoValorB);
        hacerCalculo(valorA, nuevoValorB,tipocalculo);
    };
    function tipoCalculoEnteredHandler(event){
        const nuevoTipoCalculo = event.target.value;
        setTipoCalculo(nuevoTipoCalculo);
        hacerCalculo(valorA, valorB, nuevoTipoCalculo);
    }
    function hacerCalculo(valorA, valorB, tipocalculo){
        if(tipocalculo === "+"){
            setResultado(valorA + valorB);
        }else if(tipocalculo === "-"){
            setResultado(valorA - valorB);
        }else if(tipocalculo === "*"){
            setResultado(valorA * valorB);
        }else if(tipocalculo === "/"){
            setResultado(valorA / valorB);
        }
    }

    return(
    <div>
        <input type="number" value={valorA} onChange={input1EnteredHandler}/>
        <select value={tipocalculo} onChange={tipoCalculoEnteredHandler}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input type="number" value={valorB} onChange={input2EnteredHandler}/>
        <text>=</text>
        <text>{resultado}</text>
    </div>)
};

export default Calculos