import styled from "styled-components"

export const Main = styled.main`
display:flex;
flex-direction: column;
width: 100%;
height: 90vh;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
background-size: 100%;
background-color: white;
`
export const Formulario = styled.form`


`
export const Divform = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 3rem;
height: 85%;
background-color: #DBDBDB;
padding: 5%;
border-radius: 25px;
width: 75vw;
align-items: center;

@media(min-width: 320px) and (max-width: 768px){
width:65vw;
height: 70vh;  
}
`

export const H1 = styled.h1`
display: flex;
justify-content: center;
`

export const Button = styled.button`
background-color: #4677B6;
border: none;
height: 20%;
width: 22%;
border-radius: 20px;
color: white;
display: flex;
align-items: center;
justify-content: center;
margin-top: 3%;
`

export const Input = styled.input`
width: 30rem;
border: solid 1px #211e1ecf;
border-radius: 2px;
margin: 1%;

`




