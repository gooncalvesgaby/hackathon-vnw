import React, { useState } from "react"
import * as S from "./cadastroStyle.jsx"
import { useNavigate } from "react-router-dom";

function Cadastro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [confirmasenha, setConfirmasenha] = useState("");
    const navigate = useNavigate();
    const emailRegex = /^\S+@\S+\.\S+$/;

    const handleSenha = (event) => {
        setConfirmasenha(event.target.value)
    }


    const handleCpf = (event) => {
        setCpf(event.target.value.replace(/\D/, ''))
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)

    }



    const signinForm = (event) => {
        event.preventDefault()

        if (name.split(" ").length < 2) {
            alert("digite seu nome completo")
        }

        if(emailRegex.test(event.target.value)){
            alert("Digite um email valido")
            return;
        }

        if (cpf.length < 11 || !cpf || cpf == '' || cpf.length > 11) {
            alert("informe um cpf valido");
            return;
        }

        if (password == ""  || confirmasenha == "") {
            alert("digite uma senha")
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
                <S.Formulario onSubmit={signinForm}>
                    <S.Divform>
                        <S.H1>FORMULÁRIO CADASTRO </S.H1>
                        <S.Input value={name} type="text" placeholder="Nome Completo" onChange={handleName}/> 
                        <S.Input value={email} type="email" placeholder="Email" onChange={handleEmail} />
                        <S.Input value={cpf} type="text" placeholder="CPF" onChange={handleCpf} />
                        <S.Input value={password} type="password" placeholder="Senha" onChange={handlePassword} />
                        <S.Input value={confirmasenha} type="password" placeholder="Confirme sua senha " onChange={handleSenha} />
                        <S.Button type="submit">Cadastra-se</S.Button>
                    </S.Divform>
                </S.Formulario>
            </S.Main>
        </>
    )
}

export default Cadastro
