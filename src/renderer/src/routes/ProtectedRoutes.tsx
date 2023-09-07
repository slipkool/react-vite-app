import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoutes = (): React.JSX.Element => {
  const auth = useAuth()

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
