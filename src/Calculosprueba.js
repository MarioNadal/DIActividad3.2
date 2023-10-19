import { useState } from "react";

const Calculosprueba = () => {
    const [prueba, setPrueba] = useState();
    setPrueba("hola")
    return(
        <div>
            <p>prueba componente</p>
            {prueba}
        </div>
    )
}

export default Calculosprueba;