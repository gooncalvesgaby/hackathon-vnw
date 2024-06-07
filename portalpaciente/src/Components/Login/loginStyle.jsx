import styled from "styled-components"


export const Div = styled.div`
height: 15vh;
width: 100%;
border: solid red;
background-color: #78B4D6;

img {
height: 13vh;
margin-left: 2rem;

}
`

export const Section = styled.section`
height: 90vh;
background-position: center;
background-size: cover;
font-family: Helvetica;
display: flex;
align-items: center;

@media(min-width: 320px) and (max-width: 600px){
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    border: solid red ;
}
`

export const Form = styled.form`
display: flex;
align-items: center;
flex-wrap: wrap;
width: 30vw;
padding: 5em;
border: 0;
height: 80vh;
margin-left: 3rem;
background-color: #F2F2F2;
border-radius: 40px;

@media(min-width: 320px) and (max-width: 768px){
    width: 70vw;
    height: 60%;
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    justify-content: center;
    border: solid red;
}
`

export const Input = styled.input`
width: 100vw;
border: 0;
height: 15%;
border-radius: 20px;
background-color: transparent;
 `

export const Open = styled.button`
border-radius: 40px;
width: 100vw;
height: 3rem;
background-color: #2787BD;
color: #fff;
font-size: 1.5em;
@media(min-width: 320px) and (max-width: 768px){
    height: 5vh;
}

`

export const Cadastro = styled.div`
width: 100%;
height: 5rem;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
flex-direction: column;

@media(min-width: 320px) and (max-width: 768px){
    font-size: 0.6rem;
}

button {
    border-radius: 30px;
    width: 9vw;
    height: 2.5rem;
    background-color: #2787BD;
    color: #fff;
 
    @media(min-width: 320px) and (max-width: 768px){
        width: 20vw;
        font-size: 0.6rem;
    }

}
`

export const Div2 = styled.div`
font-size: 0.8em;
display: flex;
justify-content: space-between;
width: 100%;

@media(min-width: 320px) and (max-width: 768px){
    font-size: 0.5rem;
    border: solid red;
    width: 100%;
}
`

