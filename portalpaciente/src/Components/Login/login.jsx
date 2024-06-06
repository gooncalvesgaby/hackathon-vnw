import React from "react"
import Logo from '../../assets/logo-inicio.png'
import Portal from '../../assets/bckportal.jpg'

import * as S from "./loginStyle.jsx"

function Login() {
    return(

        <main>

            <S.Div>
            <img src={Logo} alt="Logo Dev Amaro"/>
            </S.Div>

            <S.Section style={{backgroundImage:`url(${Portal})`}}>
                
            <S.Form>
                <h1>Acesse seu Login</h1>
                <div>
                    <input type="text"
                    placeholder="CPF"/>    
                </div>
                <div>
                    <input type="password"
                    placeholder="Senha"/>
                </div>
                <div>
                        <label>
                            <input type="checkbox"/>Lembre de mim</label>
                            <a href="#">Esqueceu a senha</a>
                    </div>
                    
                <div>
                    <p>
                        Não possui cadastro <a href="#">Cadastre-se</a>
                    </p>
                </div>
            </S.Form>
            </S.Section>
        </main>
    )
  }
  export default Login
  