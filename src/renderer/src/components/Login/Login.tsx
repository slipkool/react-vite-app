import { Link, Navigate, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './login.css'

//imported icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

//Imported image
import img from '../../assets/logo.png'
import video from '../../assets/video.mp4'
import { AuthResponse, AuthResponseError } from '@renderer/app/@types/types'
import { useAuth } from '@renderer/app/context/AuthProvider'

const Login = (): React.JSX.Element => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setStatusHolder] = useState('message')
  const auth = useAuth()
  const goTo = useNavigate()

  useEffect(() => {
    if (loginStatus !== '') {
      setStatusHolder('showMessage')
      const timer = setTimeout(() => {
        setStatusHolder('message')
        setLoginStatus('')
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [loginStatus])

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
      //throw Error()

      if (response) {
        setLoginStatus('')
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
        setLoginStatus(errorResponse.body.error)
      }
    } catch (error) {
      setLoginStatus('Error al loguear')
    }
  }

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and sell extraordinary products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don`t have an account?</span>
            <Link to={'/signup'}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={img} alt="Image Name" />
            <h3>Welcome Back!</h3>
          </div>

          <form onSubmit={handleSubmit} className="form grid">
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  value={user || ''}
                  onChange={(e): void => setUser(e.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="text"
                  id="password"
                  placeholder="Enter Password"
                  value={password || ''}
                  onChange={(e): void => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
