/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import "./app.css"
import InicialTela from '../componentes/inicialTela'
import Jogo from '../componentes/jogo'


const app = _ => {

    const [tela, setTela] = React.useState(true)

    const mudarTela = (bool) => setTela(bool)

    return (
        <div>
            {tela ? <InicialTela mudarTela={mudarTela} /> : <Jogo mudarTela={mudarTela} />}
        </div>
    )
}

export default app