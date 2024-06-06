import React from "react";
import Inicio from "../Components/Inicio/inicio.jsx"
import Login from "../Components/Login/login.jsx"
import Cadastro from "../Components/Cadastro/cadastro.jsx"
import Header from "../Components/Header/Header.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Navegacao(){
    return(
        <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="portal" element={ <Inicio />} />
                <Route path="cadastro" element={ <Cadastro/> } />
                <Route path="/" element={ <Login/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Navegacao