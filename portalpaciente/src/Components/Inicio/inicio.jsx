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



function Inicio() {
    return(
        <section>
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
                    <S.indice>
                    <S.categoria src={ficha} alt="" />
                    <p>AGENDAMENTO</p>
                    </S.indice>
                <S.indice>
                    <S.categoria  src={exame}alt="" />
                    <p>MINHAS CONSULTAS</p>
                </S.indice>
                <S.indice>
                    <S.categoria  src={acordo} alt="" />
                    <p>STATUS DO CONVÊNIO</p>
                </S.indice>
                <S.indice>
                    <S.categoria  src={teste} alt="" />
                <p>RESULTADOS DE EXAMES</p>
                </S.indice>
            </S.Portal>
            <section>
                <img src={vacina} alt="" />
            </section>
        </S.Main>

        <S.Footer>
            <h3>©2024 Dev’s Amaro. Todos os direitos reservados.</h3>
        </S.Footer>
        </section>

    )
}

export default Inicio