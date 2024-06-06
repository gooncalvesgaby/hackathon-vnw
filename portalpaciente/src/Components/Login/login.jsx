import React from "react"
import Logo from '../../assets/logo-ds.png'
import Portal from '../../assets/bckportal.jpg'


import * as S from "./loginStyle.jsx"

function Login() {
    return (

        <main>

            <S.Div>
                <img src={Logo} alt="Logo do Hospital Dev Amaro. Imagem de coração      " />
            </S.Div>

            <S.Section style={{ backgroundImage: `url(${Portal})` }}>

                <S.Form>
                    <h1>Acesse seu Login</h1>

                    <S.Input type="text"
                        placeholder="CPF" />


                    <S.Input type="password"
                        placeholder="Senha" />


                    <div>
                        <label>
                            <input type="checkbox" />Lembre de mim</label>
                        <a href="#">Esqueci minha senha</a>
                    </div>
                    <S.Open to="/Inicio">Entrar</S.Open>
                    <S.Cadastro>
                        <p>
                            Não possui cadastro?
                        </p>
                        <button>Cadastre-se</button>
                    </S.Cadastro>
                </S.Form>
            </S.Section>
        </main>
    )
}
export default Login
