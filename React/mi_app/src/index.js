//React como tal
import React from 'react';

//Api del DOM de React
import ReactDOM from 'react-dom/client';

// Router / Biblioteca de rutas
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Estilos CSS
import './index.css';

//Componente (Menu)
import Menu from './Vistas/Menu';

//Vistas
import App from "./App";
import MiPrimeraVista from "./Vistas/MiPrimeraVista";
import Componente1 from "./Vistas/Componente1";
import Componente2 from "./Vistas/Componente2";
import Saludos from './Vistas/Saludos';
import HookUseState from "./hooks/HookUseState"


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
<BrowserRouter>
<Menu/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/componente1" element={<Componente1/>}/>
      <Route path="/componente2" element={<Componente2/>}/>
      <Route path="/mi-primera-vista" element={<MiPrimeraVista/>}/>
      <Route path="/saludos" element={<Saludos/>}/>
      <Route path="/usestate" element={<HookUseState/>}/>
    </Routes>
  </BrowserRouter>
);


