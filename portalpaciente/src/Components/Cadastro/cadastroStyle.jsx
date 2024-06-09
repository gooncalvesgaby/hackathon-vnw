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
`

export const Forms = styled.section`

display: flex;
flex-direction: column;
width: 45vw;
background-color:#DBDBDB;
height: 70vh;
border-radius: 10px;
justify-content: center;
margin-top: 2rem;


button{
background-color: #4677B6;
width: 10vw;
height: 8vh;
border-radius: 8px;
font-weight:900;
color:white;


}

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;
    background-color: #4677B6;
    background-repeat: no-repeat;
    background-size: 100%;
    

    

    button{
        background-color: white;
        color:black;
        width: 15vw;
    }

}

`
export const Divform = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 3rem;
height: 85%;
width: 40vw;
background-color: #DBDBDB;
padding: 5%;
border-radius: 10%;

@media(min-width: 320px) and (max-width: 768px){
    width:65vw;
    height: 70vh;
    
    
}
`

export const Formulario = styled.form`

`