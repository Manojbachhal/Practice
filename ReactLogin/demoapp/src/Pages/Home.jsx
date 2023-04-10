import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Authctx } from '../Context/Authcontext'

function Home() {

    const { user } = useContext(Authctx);

    return (
        <div>
            <h1>Welcome {user}</h1>
        </div>
    )
}

export default Home