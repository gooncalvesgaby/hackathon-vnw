import styled from "styled-components"

export const center = styled.section`
     display: flex;
     align-items: center;
     @media(min-width: 320px) and (max-width: 768px){
        margin-right: 5rem;
        margin-bottom: 2rem;
        flex-direction: column-reverse;
        height: 15vh;
     }
     
`

export const Background = styled.div`
    width: 50vw ;
    height:70vh ;
    background-color: white;
    position: fixed;
    display: flex;
    color:#4677B6;
    @media(min-width: 320px) and (max-width: 768px){
        height: 50vh;
    }
`

export const Conteiner = styled.div`
    width: 50vw;
    height:70vh ;
    border-radius: 12px;
    background-color: white;
    box-shadow: black 0px 5px 15px;
    padding: 25px;
    @media(min-width: 320px) and (max-width: 768px){
        width: 60vw;
        height: 45vh;
       
    }
`

export const selection = styled.div`
    display: flex;
    justify-content: space-evenly;

`
export const Title = styled.div`
    text-align: center;
    margin-top: 10px;
`

export const Tbutton = styled.div`
    background-color: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;
`

export const Body = styled.div`
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
`
export const option = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    text-decoration: underline #4677B6;
    @media(min-width: 320px) and (max-width: 768px){
        width: 30vw;
        height: 15vh;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
    }
`
export const grupo = styled.section`
    display: flex;
    justify-content: space-around;
    @media(min-width: 320px) and (max-width: 768px){
        height: 20vh;

    }
   

`
export const dados = styled.div`
    color: black;
    margin-top: 2rem;
    font-size: 1.3rem;
    @media(min-width: 320px) and (max-width: 768px){
        font-size: 0.6rem;
        margin-bottom: 10rem;
        
    }
    
`
export const button = styled.div`
    width: 7rem;
    height: 2rem;
    background-color: #4677B6;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const barra = styled.div`
    background-color: #D5D8DF;
    display: flex;
    align-items: center;
    border-radius: 5%;
`
export const Input = styled.input`
    background-color: transparent;
    border: transparent;
    @media(min-width: 320px) and (max-width: 768px){
        width: 25vw;
    }
`

export const Img = styled.img`
    width: 1.5rem;
    height: 1.5rem;
   
`