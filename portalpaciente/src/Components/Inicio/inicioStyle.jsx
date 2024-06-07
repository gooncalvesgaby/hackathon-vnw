import styled from "styled-components"

export const Nav = styled.nav`
    width: 100%;
    height: 8vh;
    background-color: #DBE9EC;
    color: #4677B6;
`

export const Ul = styled.ul`
    display: flex;
    height: 8vh;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    font-size: 1.5rem;
`
export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    align-items: center;
    @media(min-width: 320px) and (max-width: 768px){
        display: flex;
        flex-direction: column;
        height: 40%;
        flex-direction: column-reverse;
    }
`

export const Portal = styled.section`
    display: flex;
    width: 36vw;
    height: 80vh;
    flex-wrap: wrap;
    background-color: #AFC6D2;
    padding: 3rem;
    margin-left: 2rem;
    justify-content: space-around;
    border-radius:15%;
    @media(min-width: 320px) and (max-width: 768px){
        width: 65vw;
        margin-bottom: 1rem;
        margin-top: 1rem;
        font-size: 0.8rem;
    }
`

export const Section = styled.section`
@media(min-width: 320px) and (max-width: 768px){
    img{
        width: 100vw;
        height: 35vh;
    }
}
`

export const button = styled.button`
`
export const indice = styled.button`
    background-color: white;
    width: 10rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius:20%;
    font-size: 14px;
    @media(min-width: 320px) and (max-width: 768px){
        width: 5.8rem;
        height: 6.1rem;
        align-items: center;
        font-size: 0.7rem;
        font-weight: 700;
        
    }
`

export const categoria = styled.img`
    margin-bottom: 1rem;
    width: 4rem;
    height: 4rem;
    @media(min-width: 320px) and (max-width: 768px){
        width: 3rem;
        height: 3rem;
    }
`
export const Footer = styled.footer`
    background-color:  #4677B6;
    height:6vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: white;
    @media(min-width: 320px) and (max-width: 768px){
        height: 10vh;
        font-size: 0.8rem;
    }
`
