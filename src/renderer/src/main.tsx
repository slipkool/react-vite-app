import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './app/config/Routes'
import { AuthProvider } from './app/context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
)
