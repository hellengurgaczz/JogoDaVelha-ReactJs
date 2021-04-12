import React from 'react'
import './botoes.css'

const botoes = _ => {

    const localizacaoJogadas  = () => {

        console.log(localStorage)
    }


    return (
        <div>
            <button onClick={e => localizacaoJogadas()}>1.Localização das jogadas</button><br />
            <button>2.Item selecionado OK</button><br />
            <button>3.?</button><br />
            <button>4.Jogadas em ordem crescente</button><br />
            <button>5.Mostrar vitória</button><br />
            <button>6.Empate OK</button><br />
        </div>
    )
}

export default botoes