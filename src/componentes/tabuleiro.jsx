/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import "./tabuleiro.css"

var i = 1
var array = []

const tabuleiro = _ => {

    const guardarLocalStorage = (id) => {


        if (i === 1) {
            localStorage.clear()
        }

        let linha = null
        let coluna = null

        if (id === 1) { linha = 1; coluna = 1 }
        if (id === 2) { linha = 1; coluna = 2 }
        if (id === 3) { linha = 1; coluna = 3 }
        if (id === 4) { linha = 2; coluna = 1 }
        if (id === 5) { linha = 2; coluna = 2 }
        if (id === 6) { linha = 2; coluna = 3 }
        if (id === 7) { linha = 3; coluna = 1 }
        if (id === 8) { linha = 3; coluna = 2 }
        if (id === 9) { linha = 3; coluna = 3 }

        let objeto = { jogada: i, linha: linha, coluna: coluna }
        localStorage.setItem(i, JSON.stringify(objeto))

    }

    const marcar = (id) => {
        if (document.getElementById(id).innerHTML || _.ganhador != null) {

        } else {
            array[id - 1] = _.icone
            document.getElementById(id).innerHTML = _.icone
            document.getElementById(id).className = _.icone === 'X' ? 'jogadorX' : 'jogadorO'
            _.icone === 'X' ? _.mudarIcone('O') : _.mudarIcone('X')
            guardarLocalStorage(id)
            i++
        }
    }

    const marcarGanhador = (a, b, c) => {
        document.getElementById(a).className = 'marca'
        document.getElementById(b).className = 'marca'
        document.getElementById(c).className = 'marca'
    }

    if (i >= 5) {

        if (((array[0] === 'X' && array[1] === 'X') && array[2] === 'X') || ((array[0] === 'O' && array[1] === 'O') && array[2] === 'O')) {
            _.declararGanhador(array[0])
            marcarGanhador(1, 2, 3)
        }

        if (((array[3] === 'X' && array[4] === 'X') && array[5] === 'X') || ((array[3] === 'O' && array[4] === 'O') && array[5] === 'O')) {
            _.declararGanhador(array[3])
            marcarGanhador(4, 5, 6)
        }

        if (((array[6] === 'X' && array[7] === 'X') && array[8] === 'X') || ((array[6] === 'O' && array[7] === 'O') && array[8] === 'O')) {
            _.declararGanhador(array[6])
            marcarGanhador(7, 8, 9)
        }

        if (((array[0] === 'X' && array[3] === 'X') && array[6] === 'X') || ((array[0] === 'O' && array[3] === 'O') && array[6] === 'O')) {
            _.declararGanhador(array[0])
            marcarGanhador(1, 4, 7)
        }

        if (((array[1] === 'X' && array[4] === 'X') && array[7] === 'X') || ((array[1] === 'O' && array[4] === 'O') && array[7] === 'O')) {
            _.declararGanhador(array[1])
            marcarGanhador(2, 5, 8)
        }

        if (((array[2] === 'X' && array[5] === 'X') && array[8] === 'X') || ((array[2] === 'O' && array[5] === 'O') && array[8] === 'O')) {
            _.declararGanhador(array[2])
            marcarGanhador(3, 6, 9)
        }

        if (((array[2] === 'X' && array[4] === 'X') && array[6] === 'X') || ((array[2] === 'O' && array[4] === 'O') && array[6] === 'O')) {
            _.declararGanhador(array[2])
            marcarGanhador(3, 5, 7)
        }

        if (((array[0] === 'X' && array[4] === 'X') && array[8] === 'X') || ((array[0] === 'O' && array[4] === 'O') && array[8] === 'O')) {
            _.declararGanhador(array[0])
            marcarGanhador(1, 5, 9)
        }

        else if (i === 10) {
            _.declararGanhador('#')
        }
    }

    return (
        <div id="tabuleiro">
            <div id={1} onClick={e => marcar(1)}></div>
            <div id={2} onClick={e => marcar(2)}></div>
            <div id={3} onClick={e => marcar(3)}></div>
            <div id={4} onClick={e => marcar(4)}></div>
            <div id={5} onClick={e => marcar(5)}></div>
            <div id={6} onClick={e => marcar(6)}></div>
            <div id={7} onClick={e => marcar(7)}></div>
            <div id={8} onClick={e => marcar(8)}></div>
            <div id={9} onClick={e => marcar(9)}></div>
        </div>
    )
}

export default tabuleiro