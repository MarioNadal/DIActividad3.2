function Calculation({a,b,tipocalculo,input1EnteredHandler, input2EnteredHandler, tipoCalculoEnteredHandler}){
    return(
    <div>
    <input type="number" value={a} onChange={input1EnteredHandler}/>
          <select value={tipocalculo} onChange={tipoCalculoEnteredHandler}>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
          </select>
          <input type="number" value={b} onChange={input2EnteredHandler}/>      
    </div>)
}

export default Calculation