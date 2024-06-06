import React from "react";
import Inicio from "../Components/Inicio/inicio.jsx"
import Login from "../Components/Login/login.jsx"
import Cadastro from "../Components/Cadastro/cadastro.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Navegacao(){
    return(
        <BrowserRouter>

        <button><Link to= "/Inicio"> Inicio</Link></button>

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Inicio" element={<Inicio/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Navegacao