import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Sign from '../Pages/Sign'
import { useContext } from 'react'
import { Authctx } from '../Context/Authcontext'
function Allroutes() {
    const { login, setLogin } = useContext(Authctx);
    return (
        <div>
            <Routes>
                <Route path='/home' element={login ? <Home /> : <Sign />} />
                <Route path='/' element={!login ? <Sign /> : <Home />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default Allroutes