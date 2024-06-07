import React, { useState } from "react"
import * as S from "./cadastroStyle.jsx"
<<<<<<< HEAD
import Back from "../../assets/background.jpg"
=======
import Logo from "../../assets/logo-ds.png"
import { useNavigate } from "react-router-dom";

function Cadastro (){

const[name, setName] = useState("");
const[email, setEmail] = useState("");
const[cpf, setCpf] = useState("");
const[password, setPassword] = useState("");
const[confirmasenha, setConfirmasenha] = useState("");
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
    if(cpf.length < 11 || !cpf || cpf == '' || cpf.length > 11) {
        alert("informe um cpf valido");
        return;
    }

    if(password == "") {
        alert("digite sua senha")
        return;
    }

    if(confirmasenha != handlePassword){
        alert("senhas precisam ser iguais")
        return;
    }

    navigate('/portal')


}
>>>>>>> 8453fc24743eda79000df33966de991d422e1390

    return(
<<<<<<< HEAD
        <S.Main style={{ backgroundImage: `url(${Back})` }}
        >
        
         <S.Forms>
         <h1>FORMULARIO DE CADASTRO </h1>
         <S.Div>
          
=======
        <>
        <S.Main>
         <section>
            <div>
                <img src={Logo}/>
                <h2>Cadastro do Usuario </h2>

            </div>
         </section>
         <S.Forms onSubmit={loginForm}>
         <h1>FORMULARIO CADASTRO </h1>
>>>>>>> 8453fc24743eda79000df33966de991d422e1390
          <label >NOME</label>
          <input value={name} type="text" placeholder="Nome Completo" onChange={handleSenha}/>
          <label >EMAIL</label>
          <input value={email} type="text" placeholder="Email"/>
          <label >CPF</label>
<<<<<<< HEAD
          <input type="text" placeholder="CPF"/>
          <label >DATA DE NASCIMENTO </label>
          <input type="text" placeholder="Data de Nascimento" />
=======
          <input value={cpf} type="text" placeholder="CPF" onChange={handleCpf}/>
>>>>>>> 8453fc24743eda79000df33966de991d422e1390
          <label >SENHA</label>
          <input value={password} type="password" placeholder="Senha" onChange={handlePassword}/>
          <label >CONFIRMAR SENHA</label>
          <input value={confirmasenha} type="password" placeholder="Confirme sua senha " onChange={handleSenha}/>
          <button>Cadastra-se</button> 
          </S.Div>
         </S.Forms>
        </S.Main>
        </>
    )
}
 
 export default Cadastro
