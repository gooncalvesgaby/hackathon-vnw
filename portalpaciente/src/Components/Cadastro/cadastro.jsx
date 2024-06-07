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
        // preventDefault é so para nao mudar de pagina

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
                        <h1>FORMULARIO CADASTRO </h1>
                        <label >NOME</label>
                        <input value={name} type="text" placeholder="Nome Completo" onChange={handleName}/> 
                        {/* toda vez que o usuario digita algo no input é disparado e evento onChange
                        toda vez que o onChange é disparado ele ta chamando a funcao que eu mandei pra ele */}
                        <label >EMAIL</label>
                        <input value={email} type="email" placeholder="Email" onChange={handleEmail} />
                        <label >CPF</label>
                        <input value={cpf} type="text" placeholder="CPF" onChange={handleCpf} />
                        <label >SENHA</label>
                        <input value={password} type="password" placeholder="Senha" onChange={handlePassword} />
                        <label >CONFIRMAR SENHA</label>
                        <input value={confirmasenha} type="password" placeholder="Confirme sua senha " onChange={handleSenha} />
                        <button type="submit">Cadastra-se</button>
                    </S.Divform>
                </S.Formulario>
            </S.Main>
        </>
    )
}

export default Cadastro
