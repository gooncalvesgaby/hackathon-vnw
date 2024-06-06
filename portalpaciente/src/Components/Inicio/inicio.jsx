import React from "react"
import * as S from "./inicioStyle.jsx"
import Logo from "../../assets/logo-ds.png"
import Ajuda from "../../assets/ajuda.png"
import Perfil from "../../assets/perfil.png"

function Inicio(){
    return(
        <S.Header>
            <div>
                <S.Logo src={Logo} alt="" />
            </div>
            <div>
                <h1>CENTRAL DE ATENDIMENTO</h1>
            </div>
            <div>
                <S.Icone src={Ajuda} alt="" />
                <S.Icone src={Perfil} alt="" />
            </div>
        </S.Header>
    )
}

export default Inicio