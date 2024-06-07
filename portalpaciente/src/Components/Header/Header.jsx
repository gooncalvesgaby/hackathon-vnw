import React, { useState } from "react"
import Logo from "../../assets/logo-ds.png"
import Ajuda from "../../assets/ajuda.png"
import Perfil from "../../assets/perfil.png"
import * as S from "./headerStyle.jsx"

function Header() {

    const [isActive, setActive] = useState(false)

    return(
         <S.Div>
            <S.Img src={Logo} alt="imagem de fundo" />
            <   S.H1>Central de atendimento</S.H1>
            <S.DivMenu>
                <S.ImgMenu src={Ajuda} alt="imagem para auxilio" />
                    <S.dropdown className="dropdown">
                        <S.Btn className="dropdown-btn" onClick={e => setActive(!isActive)}>
                        <S.ImgMenuP src={Perfil} alt="imagem com esboço de um perfil" />
                        </S.Btn>
                        {isActive &&
                            <S.content className="dropdown-content">
                            <S.item className="dropdown-item">
                                <h1>Atualizar seu Cadastro</h1>
                            </S.item>
                            <S.item className="dropdown-item">
                                <h1>Deslogar</h1>
                            </S.item>
                        </S.content>
                        }
                    </S.dropdown>
            </S.DivMenu>
        </S.Div>
    )
}

export default Header