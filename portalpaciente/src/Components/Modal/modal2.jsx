import * as S from "./modalstyle.jsx"
import lupa from "../../assets/lupa.png"

function Modal({ closeModal }) {

    return (
        <S.center>
            <S.Background className="modalBackground">
                <S.Conteiner className="modalConteiner">
                    <S.selection>
                        <S.Title className="title"></S.Title>
                        <h2>AGENDAMENTO</h2>
                        <S.Tbutton onClick={() => closeModal(false)}> X </S.Tbutton>
                    </S.selection>
                    <div className="titleCloseBtn">
                        <S.Body className="body"></S.Body>
                        <S.option>
                            <S.button> Presencial</S.button>
                            <S.button> Teleconsulta</S.button>
                            <forms>
                                <S.barra>
                                    <S.Input type="text" placeholder="" />
                                    <S.Img src={lupa} alt="icone de uma lupa" />
                                </S.barra>
                            </forms>
                        </S.option>
                    </div>
                </S.Conteiner>
            </S.Background>

        </S.center>
    )
}

export default Modal