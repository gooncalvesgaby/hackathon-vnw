import React, {useState} from "react"
import Portal from '../../assets/bckportal.jpg'
import * as S from "./loginStyle.jsx"
import { useNavigate } from "react-router-dom";



function Login() {

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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

        navigate('/portal')


    }

    function signIn() {
        navigate('/cadastro')

    }
 

    return (
        <>
       
        <main>
            <S.Section style={{ backgroundImage: `url(${Portal})` }}>

                <S.Form  onSubmit={loginForm}>
                    <h1>Acesse seu Login</h1>
                    
                        <S.Input value={cpf} type="text" placeholder="CPF" onChange={handleCpf}/>
                    
                    
                        <S.Input value={password} type="password" placeholder="Senha" onChange={handlePassword}/>
                    
                    <S.Div2>
                        <label>
                            <input  type="checkbox" />Lembre de mim
                        </label> 
                        <a href="#">Esqueceu a senha</a>
                    </S.Div2>
                    <S.Open type="submit ">Entrar</S.Open>
                    <S.Cadastro>
                        <p>
                            Não possui cadastro?
                        </p>
                        <button onClick={signIn} type="button">Cadastre-se</button>
                    </S.Cadastro>
                    
                </S.Form>
            </S.Section>
        </main>
        </>
    )
}
export default Login
