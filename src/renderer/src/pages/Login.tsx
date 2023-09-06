import { AuthResponse, AuthResponseError } from '@renderer/app/@types/types'
import { useAuth } from '@renderer/app/context/AuthProvider'
import DefaultLayout from '@renderer/app/layout/DefaultLayout'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = (): React.JSX.Element => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errorResponse, setErrorResponse] = useState('')
  const auth = useAuth()
  const goTo = useNavigate()

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    try {
      /*const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });*/
      const response: AuthResponse = {
        body: {
          user: {
            _id: '1',
            name: user,
            username: user
          },
          accessToken: password,
          refreshToken: password
        }
      }

      if (response) {
        setErrorResponse('')
        if (response.body.accessToken && response.body.refreshToken) {
          auth.saveUser(response)
          goTo('/dashboard')
        }
      } else {
        const errorResponse: AuthResponseError = {
          body: {
            error: 'Error'
          }
        }
        setErrorResponse(errorResponse.body.error)
      }
    } catch (error) {
      setErrorResponse('Error al loguear')
    }
  }

  return (
    <DefaultLayout>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {!!errorResponse && <div>{errorResponse}</div>}
          <label htmlFor="txtUser">User</label>
          <input
            type="text"
            name="txtUser"
            id="txtUser"
            value={user}
            onChange={(e): void => setUser(e.target.value)}
          />

          <label htmlFor="txtPassword">Password</label>
          <input
            type="text"
            name="txtPassword"
            id="txtPassword"
            value={password}
            onChange={(e): void => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default Login
