/* Import React Router --- > */
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import headerstyle from '../css/Header.module.css'



/* Componentes pages --- > */

import Historia from '../pages/Historia.page'
import Sobre from '../pages/Sobre.page'
import Contatos from '../pages/Contatos.page.js'
import Home from '../Home'

export default () => {
    return (
        <BrowserRouter>
            <header>
                <div className={headerstyle.containerHeader}>
                    <h1 className={headerstyle.titleHeader}>Patric &A</h1>
                    <nav>
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/historia" >Historia</Link></li>
                            <li><Link to="/contatos" >Contatos</Link></li>
                            <li><Link to="/sobre" >Politica</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <Routes>

                <Route element={<Home />}  path="/" exact />
                <Route element={<Historia/>} path="/historia" />
                <Route element={<Contatos />} path="/contatos" />
                <Route element={<Sobre/>} path="/sobre" />
            
            </Routes>
        </BrowserRouter>
    )
}