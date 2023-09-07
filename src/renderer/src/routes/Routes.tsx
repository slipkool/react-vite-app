import { createHashRouter } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Login from '@renderer/pages/Login/Login'
import Register from '@renderer/pages/Register/Register'
import Home from '@renderer/pages/Dashboard/home/Home'
import Profile from '@renderer/pages/Profile'
import ErrorPage from '@renderer/pages/ErrorPage'

const routes = createHashRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signup',
    element: <Register />
  },
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/dashboard',
        element: <Home />
      },
      {
        path: '/me',
        element: <Profile />
      }
    ]
  }
])

export { routes }
