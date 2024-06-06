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
 

    return (
        <>
       
        <main>
            <S.Section style={{ backgroundImage: `url(${Portal})` }}>

                <S.Form  onSubmit={loginForm}>
                    <h1>Acesse seu Login</h1>
                    <div>
                        <input value={cpf} type="text" placeholder="CPF" onChange={handleCpf}/>
                    </div>
                    <div>
                        <input value={password} type="password" placeholder="Senha" onChange={handlePassword}/>
                    </div>
                    <div>
                        <label>
                            <input  type="checkbox" />Lembre de mim
                        </label> 
                        <a href="#">Esqueceu a senha</a>
                    </div>
                    <button to="/Inicio">Entrar</button>
                    <div>
                        <p>
                            Não possui cadastro <a href="#">Cadastre-se</a>
                        </p>
                    </div>
                    <button type="submit">Cadastre-se</button>
                </S.Form>
            </S.Section>
        </main>
        </>
    )
}
export default Login
