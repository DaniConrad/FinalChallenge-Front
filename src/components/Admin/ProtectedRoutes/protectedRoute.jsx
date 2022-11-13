import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'

export const ProtectedRoute = ({children}) => {

    const { user } = useContext(UserContext)
    
    if (user.role !== 'admin') {
        return <Navigate to='/auth' />
    }

    return <>{children}</>
}