import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Authctx } from '../Context/Authcontext'
import { useNavigate } from 'react-router-dom'

function Home() {
    const { login, setLogin, setUser, user } = useContext(Authctx)
    const navigate = useNavigate();
    const check = () => {
        function getCookie(cookieName) {
            let cookie = {};
            document.cookie.split(';').forEach(function (el) {
                let [key, value] = el.split('=');
                cookie[key.trim()] = value;
            })
            return cookie[cookieName];
        }
        let userEmail = getCookie("userEmail");
        let token = getCookie("token");
        if (!userEmail || !token) {
            setLogin(false);
            setUser('');
            navigate('/');
        }
    }

    useEffect(() => {
        check();

    })
    return (
        <div>
            <h1>Welcome {user}</h1>
        </div>
    )
}

export default Home