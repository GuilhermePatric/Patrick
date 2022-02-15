/* Import React Router --- > */
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import headerstyle from '../css/Header.module.css'
import  '../css/Header.module.css'


import {useState} from 'react'
/* Componentes pages --- > */

import Historia from '../pages/Historia.page'
import Sobre from '../pages/Sobre.page'
import Contatos from '../pages/Contatos.page.js'
import Home from '../Home'

export default () => {

    const [ativado,setAtivado] = useState(true);
    var nav = document.querySelector('#Teste')

    function Ativar(params) {
     setAtivado(!ativado)
     console.log(nav)
     console.log(ativado)
    }

    return (
        <BrowserRouter>
            <header>
                <div className={headerstyle.containerHeader}>
                    <h1 className={headerstyle.titleHeader}>Patric &A</h1>
                    <button onClick={Ativar}>Menu</button>
                    <nav className={ativado ? headerstyle.nav : headerstyle.aparecer} id="Teste">
                        <ul id="itemLink">
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/historia" >Historia</Link></li>
                            <li><Link to="/contatos" >Contatos</Link></li>
                            <li><Link to="/sobre" >Politica</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <Routes>

                <Route element={<Home />} path="/" exact />
                <Route element={<Historia />} path="/historia" />
                <Route element={<Contatos />} path="/contatos" />
                <Route element={<Sobre />} path="/sobre" />

            </Routes>
        </BrowserRouter>
    )
}