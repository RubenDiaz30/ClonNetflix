import { useState } from "react";


const hookUseState = () => {

    
    const [estado, setEstado] = useState(0);
    
    
    return (  
        <div className="">
            <h1>Contador de useState</h1>
            <span>{estado}</span>
            <div>
                {/*Botón incrementar*/}
                <button></button>
                {/*Botón reiniciar*/}
                <button></button>
                {/*Botón disminuir*/}
                <button></button>
            </div>
        
        </div>
    );
}

export default hookUseState;