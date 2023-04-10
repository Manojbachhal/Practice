import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to='/' >Login</Link>
            <Link to='/home' >Home</Link>
            <Link to='/signup' >Signup</Link>
        </div>
    )
}

export default Navbar