import React from "react";
import Inicio from "../Components/Inicio/inicio.jsx"
import Login from "../Components/Login/login.jsx"
import Cadastro from "../Components/Cadastro/cadastro.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio />} />
                <Route path="Cadastro" element={ <Cadastro/> } />
                <Route path="Login" element={ <Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navegacao