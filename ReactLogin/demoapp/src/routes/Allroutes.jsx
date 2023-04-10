import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Sign from '../Pages/Sign'
function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Sign />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default Allroutes