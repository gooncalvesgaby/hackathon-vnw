import React from "react"
import Logo from "../../assets/logo-ds.png"
import Ajuda from "../../assets/ajuda.png"
import Perfil from "../../assets/perfil.png"
import * as S from "./headerStyle.jsx"

function Header() {
    return(
        
         <S.Div>
            <S.Img src={Logo} alt="imagem de fundo" />
            <   S.H1>Central de atendimento</S.H1>
            <S.DivMenu>
                <S.ImgMenu src={Ajuda} alt="imagem para auxilio" />
                <S.ImgMenu src={Perfil} alt="imagem com esboço de um perfil" />
            </S.DivMenu>
        </S.Div>
        
    )
}

export default Header