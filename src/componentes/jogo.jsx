/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Tabuleiro from './tabuleiro'
import "./jogo.css"

const jogo = _ => {

    const [jogadorIcone, setJogadorIcone] = React.useState('X')

    const mudarIcone = icone => setJogadorIcone(icone)

    const [ganhador, setGanhador] = React.useState(null)

    const declararGanhador = ganhadorIcone => setGanhador(ganhadorIcone)

    return (
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
    )
}

export default jogo