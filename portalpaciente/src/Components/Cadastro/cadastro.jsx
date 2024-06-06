import React from "react"
import * as S from "./cadastroStyle.jsx"
import Logo from "../../assets/logo-ds.png"

 function Cadastro (){
    return(
        <S.Main>
         <section>
            <div>
                <img src={Logo}/>
                <h2>Cadastro do Usuario </h2>

            </div>
         </section>
         <S.Forms>
         <h1>FORMULARIO CADASTRO </h1>
          <label >NOME</label>
          <input type="text" placeholder="Nome Completo"/>
          <label >EMAIL</label>
          <input type="text" placeholder="Email"/>
          <label >CPF</label>
          <input type="text" placeholder="CPF"/>
          <label >SENHA</label>
          <input type="password" placeholder="Senha"/>
          <label >CONFIRMAR SENHA</label>
          <input type="password" placeholder="Confirme sua senha "/>
          <button>Cadastra-se</button> 
         </S.Forms>
        </S.Main>
    )
 }
 
 export default Cadastro
