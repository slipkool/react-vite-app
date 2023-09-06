import { useAuth } from '@renderer/app/context/AuthProvider'
import DefaultLayout from '@renderer/app/layout/DefaultLayout'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Signup = (): React.JSX.Element => {
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [Password, setPassword] = useState('')
  const [errorResponse, setErrorResponse] = useState('')
  const auth = useAuth()
  const goTo = useNavigate()

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    try {
      //throw new Error('error')
      goTo('/')
    } catch (error) {
      setErrorResponse('Error al crear el usuario')
    }
  }

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        {!!errorResponse && <div>{errorResponse}</div>}
        <label htmlFor="txtName">Name</label>
        <input
          type="text"
          name="txtName"
          id="txtName"
          value={name}
          onChange={(e): void => setName(e.target.value)}
        />

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
          value={Password}
          onChange={(e): void => setPassword(e.target.value)}
        />

        <button>Create user</button>
      </form>
    </DefaultLayout>
  )
}

export default Signup
