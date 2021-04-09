import React from 'react';
import '../CSS/inicialTela.css';

const inicialTela = _ => {

    return (
        <div id="telaInicial">
            <h1>Jogo da Velha</h1>
            <button onClick={e => _.mudarTela(false)} id="botaoJogar">JOGAR</button>
        </div>
    )
}


export default inicialTela
