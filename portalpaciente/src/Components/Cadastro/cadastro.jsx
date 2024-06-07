import React, { useState } from "react"
import * as S from "./cadastroStyle.jsx"
import Logo from "../../assets/logo-ds.png"
import { useNavigate } from "react-router-dom";

function Cadastro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmasenha, setConfirmasenha] = useState("");
    const navigate = useNavigate();

    const handleSenha = (event) => {
        setConfirmasenha(event.target.value)
    }


    const handleCpf = (event) => {
        setCpf(event.target.value.replace(/\D/, ''))
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const loginForm = (event) => {
        event.preventDefault()
        if (cpf.length < 11 || !cpf || cpf == '' || cpf.length > 11) {
            alert("informe um cpf valido");
            return;
        }

        if (password == "") {
            alert("digite sua senha")
            return;
        }

        if (confirmasenha != password) {
            alert("senhas precisam ser iguais")
            return;
        }

        navigate('/portal')


    }

    return (
        <>
            <S.Main>
                <section>
                    <div>
                        <img src={Logo} />
                        <h2>Cadastro do Usuario </h2>

                    </div>
                </section>
                <S.Formulario onSubmit={loginForm}>
                    <S.Divform>
                        <h1>FORMULARIO CADASTRO </h1>
                        <label >NOME</label>
                        <input type="text" placeholder="Nome Completo" />
                        <label >EMAIL</label>
                        <input type="text" placeholder="Email" />
                        <label >CPF</label>
                        <input value={cpf} type="text" placeholder="CPF" onChange={handleCpf} />
                        <label >SENHA</label>
                        <input value={password} type="password" placeholder="Senha" onChange={handlePassword} />
                        <label >CONFIRMAR SENHA</label>
                        <input value={confirmasenha} type="password" placeholder="Confirme sua senha " onChange={handleSenha} />
                        <button>Cadastra-se</button>
                    </S.Divform>
                </S.Formulario>
            </S.Main>
        </>
    )
}

export default Cadastro
