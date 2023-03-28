import { useState } from "react";


const HookUseState = () => {

    
    const [estado, setEstado] = useState(0);
    
    
    return (  
        <div className="">
            <h1>Contador de useState</h1>
            <span>{estado}</span>
            <div>
                {/*Botón incrementar*/}
                <button
                    onClick={()=> setEstado( estado + 1) }>
                    Aumentar
                </button>
                {/*Botón reiniciar*/}
                <button
                    onClick={()=> setEstado(0)}
                >
                    Restaurar
                </button>
                {/*Botón disminuir*/}
                <button
                    onClick={()=> setEstado( estado - 1)}
                >
                    Disminuir
                </button>
            </div>
        
        </div>
    );
}

export default HookUseState;