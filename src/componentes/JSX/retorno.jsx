import React from 'react'

const retorno = _ => {

    let arrayKeys = []

    for (let i = 0; i < localStorage.length; i++) {
        arrayKeys.push((+localStorage.key(i)))
    }

    _.solicitarRetorno === 1 ? arrayKeys.sort() : arrayKeys.sort().reverse()

    return (
        <div id="retornoListaJogadas">
            <h3>Lista de Jogadas:</h3>
            <div>
                {arrayKeys.map((e, i) => {
                    let objeto = JSON.parse(localStorage.getItem(e))
                    if (i === arrayKeys.length - 1 && _.solicitarRetorno === 1) { return <p style={{ backgroundColor: 'white', color: 'black' }}><strong>Jogada: {objeto.jogada} | Linha: {objeto.linha} | Coluna: {objeto.coluna}</strong></p> }
                    else if (i === 0 && _.solicitarRetorno === 2)  { return <p style={{ backgroundColor: 'white', color: 'black' }}><strong>Jogada: {objeto.jogada} | Linha: {objeto.linha} | Coluna: {objeto.coluna}</strong></p> }
                    else { return <p>Jogada: {objeto.jogada} | Linha: {objeto.linha} | Coluna: {objeto.coluna}</p> }
                })}
            </div>
        </div>
    )
}

export default retorno