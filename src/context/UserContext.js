import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [ user, setUser ] = useState('')
    const [ token, setToken ] = useState('')

    return(
        <UserContext.Provider value={{
            setUser,
            user,
            token,
            setToken

        }}>
                {children}
            </UserContext.Provider>
        )
}