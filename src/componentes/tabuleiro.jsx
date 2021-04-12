/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import "./tabuleiro.css"

var i = 1
var array = []

const tabuleiro = _ => {

    const guardarLocalStorage = id => {

        let objeto = {jogador: i, linha: 0, coluna: 0}
        localStorage.setItem(i, JSON.stringify(objeto))

        for (let i = 1; i++; i >= localStorage.length){
            let objeto = JSON.parse(localStorage.getItem(1))
            console.log('Jogada nº: ' + objeto.jogador + ' | Linha: ' + objeto.linha + ' | Coluna:' + objeto.coluna)
            i++
        }
        
    }

    const marcar = (id) => {

        if (document.getElementById(id).innerHTML || _.ganhador != null) {

        } else {
            guardarLocalStorage(id)
            i++
            document.getElementById(id).innerHTML = _.icone
            document.getElementById(id).className = _.icone === 'X' ? 'jogadorX' : 'jogadorO'
            _.icone === 'X' ? _.mudarIcone('O') : _.mudarIcone('X')
            array[id-1] = _.icone
        }


    }

    if (i >= 5) {

        if (((array[0] === 'X' && array[1] === 'X') && array[2] === 'X') || ((array[0] === 'O' && array[1] === 'O') && array[2] === 'O')) {
            _.declararGanhador(array[0])
        }

        if (((array[3] === 'X' && array[4] === 'X') && array[5] === 'X') || ((array[3] === 'O' && array[4] === 'O') && array[5] === 'O')) {
            _.declararGanhador(array[3])
        }

        if (((array[6] === 'X' && array[7] === 'X') && array[8] === 'X') || ((array[6] === 'O' && array[7] === 'O') && array[8] === 'O')) {
            _.declararGanhador(array[6])
        }

        if (((array[0] === 'X' && array[3] === 'X') && array[6] === 'X') || ((array[0] === 'O' && array[3] === 'O') && array[6] === 'O')) {
            _.declararGanhador(array[0])
        }

        if (((array[1] === 'X' && array[4] === 'X') && array[7] === 'X') || ((array[1] === 'O' && array[4] === 'O') && array[7] === 'O')) {
            _.declararGanhador(array[1])
        }

        if (((array[2] === 'X' && array[5] === 'X') && array[8] === 'X') || ((array[2] === 'O' && array[5] === 'O') && array[8] === 'O')) {
            _.declararGanhador(array[2])
        }

        if (((array[2] === 'X' && array[4] === 'X') && array[6] === 'X') || ((array[2] === 'O' && array[4] === 'O') && array[6] === 'O')) {
            _.declararGanhador(array[2])
        }

        if (((array[0] === 'X' && array[4] === 'X') && array[8] === 'X') || ((array[0] === 'O' && array[4] === 'O') && array[8] === 'O')) {
            _.declararGanhador(array[0])
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