/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Tabuleiro from './tabuleiro'
import Retorno from './retorno'
import "./jogo.css"


const jogo = _ => {

    const [jogadorIcone, setJogadorIcone] = React.useState('X')

    const mudarIcone = icone => setJogadorIcone(icone)

    const [ganhador, setGanhador] = React.useState(null)

    const declararGanhador = ganhadorIcone => setGanhador(ganhadorIcone)

    const [solicitarRetorno, setSolicitarRetorno] = React.useState(null)

    return (
        <div id="telaTotalJogo">
            <div id="jogo">
                <div id="esquerdo">
                    <h2>Jogo</h2>
                    <h3>Jogador: {jogadorIcone}</h3>
                    {ganhador === 'X' || ganhador === 'O' ? <p className={ganhador}>O jogador {ganhador} vanceu! Parabens!</p> : null}
                    {ganhador === '#' ? <p className={'velha'}>DEU VELHA! &#129325; </p> : null}
                    <button onClick={e => window.location.reload()}>REINICIAR JOGO</button>
                </div>
                <div id="direito">
                    <Tabuleiro icone={jogadorIcone} mudarIcone={mudarIcone} declararGanhador={declararGanhador} ganhador={ganhador} />
                </div>
            </div>
            <div id="desafios">
                <div id="opcoes">
                    <h3>Lista de Jogadas:</h3>
                    <button onClick={e => setSolicitarRetorno(0)}>Ordem crescente</button>
                    <button onClick={e => setSolicitarRetorno(1)}>Ordem descrescente</button>
                </div>
                <div id="retornos">
                    {solicitarRetorno ? <Retorno solicitarRetorno={solicitarRetorno} /> : null}
                </div>
            </div>
        </div>

    )
}

export default jogo