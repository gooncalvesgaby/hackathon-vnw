import React from "react"
import Header from "./Components/Header.jsx"
import Main from "./Components/Main.jsx"
import Footer from "./Components/Footer.jsx"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {
  return(
    <>
    <h1>Ola!!</h1>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
  

}
  

export default App
