const Mensaje = (props) => {
    
    console.table(props)

    return ( 
        <>
        <p style={{color: props.textColor, fontSize: props.tamanoLetra, fontWeight: props.grosorLetra}}>
            Hola, {props.nombre} {props.apellido}, esto es React <br />
            Estas aprendiendo a usar las Props en la clase #{props.numClase} del curso de Desarrollo Web
        </p><br />
        </>
    );
}

export default Mensaje;