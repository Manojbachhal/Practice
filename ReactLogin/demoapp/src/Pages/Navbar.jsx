import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style={{ textAlign: 'end', margin: '20px 30px' }}>
            <Link to='/' style={{ textDecoration: 'none', color: '#003FB9', padding: '10px' }}>Login</Link>
            <Link to='/home' style={{ textDecoration: 'none', color: '#003FB9', padding: '10px' }}>Home</Link>
            <Link to='/signup' style={{ textDecoration: 'none', color: '#003FB9', padding: '10px' }} >Signup</Link>
        </div>
    )
}

export default Navbar