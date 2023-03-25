import { NavLink } from "react-router-dom";

const Menu = () => {

    let CambiarColor = ({isActive}) => ({
        color: isActive ? "rgb(5,26,100)" : "rgb(8,100,1)",
        textDecoration: "none",
        fontSize: "20px"
    })

    return (
        <nav style={{
            background: "gray",
            display: "flex",
            justifyContent: "flex-end",
            gap: "15px",
            padding: "10px"

            }}>
            <span>
                <NavLink to="/" style={CambiarColor}>Home</NavLink>
            </span>

            <span>
                <NavLink to="/componente1" style={CambiarColor}>Componente 1</NavLink>
            </span>

            <span>
                <NavLink to="/componente2" style={CambiarColor}>Componente 2</NavLink>
            </span>

            <span>
                <NavLink to="/mi-primera-vista" style={CambiarColor}>Mi Primera Vista</NavLink>
            </span>

            <span>
                <NavLink to="/saludos" style={CambiarColor}>Saludos</NavLink>
            </span>
        </nav>

    )

    }

    export default Menu