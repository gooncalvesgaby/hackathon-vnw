import React from "react"
import * as S from "./cadastroStyle.jsx"
import Back from "../../assets/background.jpg"

 function Cadastro (){
    return(
        <S.Main style={{ backgroundImage: `url(${Back})` }}
        >
        
         <S.Forms>
         <h1>FORMULARIO DE CADASTRO </h1>
         <S.Div>
          
          <label >NOME</label>
          <input type="text" placeholder="Nome Completo"/>
          <label >EMAIL</label>
          <input type="text" placeholder="Email"/>
          <label >CPF</label>
          <input type="text" placeholder="CPF"/>
          <label >DATA DE NASCIMENTO </label>
          <input type="text" placeholder="Data de Nascimento" />
          <label >SENHA</label>
          <input type="password" placeholder="Senha"/>
          <label >CONFIRMAR SENHA</label>
          <input type="password" placeholder="Confirme sua senha "/>
          <button>Cadastra-se</button> 
          </S.Div>
         </S.Forms>
        </S.Main>
    )
 }
 
 export default Cadastro
