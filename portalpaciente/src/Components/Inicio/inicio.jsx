import React from "react"
import * as S from "./inicioStyle.jsx"
import Logo from "../../assets/logo-ds.png"
import Ajuda from "../../assets/ajuda.png"
import Perfil from "../../assets/perfil.png"
import acordo from "../../assets/acordo.png"
import exame from "../../assets/exame.png"
import ficha from "../../assets/ficha.png"
import teste from "../../assets/teste.png"
import vacina from "../../assets/vacina.jpg"

function Inicio(){
    return(
        <section>
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

        <S.Nav>
            <S.Ul>
                <li>Sobre</li>
                <li>Unidades</li>
                <li>Contate-nos</li>
            </S.Ul>
        </S.Nav>

        <S.Main>
            <S.Portal>
                <h2>PORTAL DO PACIENTE</h2>
                <div>
                    <S.categoria src={ficha} alt="" />
                    <p>AGENDAMENTO</p>
                </div>
                <div>
                    <S.categoria  src={exame}alt="" />
                    <p>MINHAS CONSULTAS</p>
                </div>
                <div>
                    <S.categoria  src={acordo} alt="" />
                    <p>STATUS DO CONVÊNIO</p>
                </div>
                <div>
                    <S.categoria  src={teste} alt="" />
                <p>RESULTADOS DE EXAMES</p>
                </div>
            </S.Portal>
            <section>
                <img src={vacina} alt="" />
            </section>
        </S.Main>
        </section>
    )
}

export default Inicio