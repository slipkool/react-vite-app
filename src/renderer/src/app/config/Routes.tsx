import { createHashRouter } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
/*import Login from '@renderer/pages/Login'*/
import Login from '@renderer/components/Login/Login'
/* import Signup from '@renderer/pages/Signup' */
import Register from '@renderer/components/Register/Register'
import Dashboard from '@renderer/components/Dashboard/Dashboard'
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
        element: <Dashboard />
      },
      {
        path: '/me',
        element: <Profile />
      }
    ]
  }
])

export { routes }
