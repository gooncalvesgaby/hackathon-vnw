import {useState} from "react"
import * as S from "./modalstyle.jsx"

function Modal({closeModal}){

    return(
        <S.center>
        <S.Background className="modalBackground">
            <S.Conteiner className="modalConteiner">
                <S.selection>
                    <S.Title className="title"></S.Title>
                    <h2>MINHAS CONSULTAS</h2>
                    <S.Tbutton onClick={()=> closeModal(false)}> X </S.Tbutton>
                </S.selection>
                    <div className="titleCloseBtn">
                    <S.Body className="body"></S.Body>
                    <S.option>
                        <h3>Agendadas</h3>
                        <h3>Histórico</h3>
                    </S.option>
                <S.grupo>
                    <S.dados>
                        <h4> 10/07 Exame Agendado</h4>
                        <h4> 14/07 Exame Agendado</h4>
                        <h4> 16/07 Exame Agendado</h4>
                        <h4> 12/07 Exame Agendado</h4>
                    </S.dados>
                    <S.dados>
                        <h4> 04/03 Histórico do Exame</h4>
                        <h4> 24/01 Histórico do Exame</h4>
                        <h4> 01/12 Histórico do Exame</h4>
                        <h4> 05/11 Histórico do Exame</h4>
                    </S.dados>
                </S.grupo>
                </div>
            </S.Conteiner>  
         </S.Background>

         </S.center>
    )
}

export default Modal