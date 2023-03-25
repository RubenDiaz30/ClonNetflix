import Mensaje from "../Componentes/Mensaje";

const Saludos = () => {
    return (
        <>
            <h1>Saludos</h1>
            <Mensaje nombre="Diego"
                apellido="Rodriguez"
                numClase="42"
                textColor="red"
                tamanoLetra="25px"
                grosorLetra="900" 
            />
            <Mensaje nombre="Francisco"
                apellido="Molina"
                numClase="42"
                textColor="blue"
                tamanoLetra="20px"
                grosorLetra="900" 
            />
            <Mensaje nombre="Nelson"
                apellido="Garcia"
                numClase="42"
                textColor="green"
                tamanoLetra="10px"
                grosorLetra="900" 
            />
            <Mensaje nombre="Ruben"
                apellido="Diaz"
                numClase="42"
                textColor="brown"
                tamanoLetra="15px"
                grosorLetra="900" 
            />
            <Mensaje nombre="Cesart"
                apellido="Ramirez"
                numClase="42"
                textColor="orange"
                tamanoLetra="9px"
                grosorLetra="900" 
            />
            <Mensaje nombre="Luzvelia"
                apellido="Nuñes"
                numClase="42"
                textColor="gray"
                tamanoLetra="50px"
                grosorLetra="900" />
            <Mensaje nombre="Luis"
                apellido="Sira"
                numClase="42"
                textColor="cyan"
                tamanoLetra="30px"
                grosorLetra="900" 
            />
        </>
    );
}


export default Saludos;