import React, { useState, createContext } from 'react'

export const Context = createContext();

export const Provider = (props) => {
    const [user, setUser] = useState({
        username: '',
        picUri: '',
        isStudent: true,
        isAuthenticated: false,
    })

    return (
        <Context.Provider value={{
            user,
            setUser,
        }}>
            {props.children}
        </Context.Provider>
    )
}
