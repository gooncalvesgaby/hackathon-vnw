import React from "react"
import {createGlobalStyle} from "styled-components"

import Login from "./Components/Login/login.jsx"



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
    <GlobalStyle/>
    <Login/>
    </>
  )
  

}
  

export default App
