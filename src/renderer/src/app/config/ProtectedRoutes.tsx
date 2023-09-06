import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

const ProtectedRoutes = (): React.JSX.Element => {
  const auth = useAuth()

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
