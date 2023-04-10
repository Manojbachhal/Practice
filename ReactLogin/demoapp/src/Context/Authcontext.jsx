import React, { createContext, useState } from 'react'
export const Authctx = createContext();
function Authcontext({ children }) {
  // console.log({ children })
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  return (
    <Authctx.Provider value={{ login, setLogin, setUser, user }}>
      {children}
    </Authctx.Provider>
  )
}

export default Authcontext