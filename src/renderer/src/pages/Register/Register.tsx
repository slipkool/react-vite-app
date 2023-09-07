import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './register.css'

//imported icons
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'

//Imported image
import img from '../../assets/logo.png'
import video from '../../assets/video.mp4'
import { useAuth } from '@renderer/contexts/AuthContext'

const Register = (): React.JSX.Element => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorResponse, setErrorResponse] = useState('')
  const auth = useAuth()
  const goTo = useNavigate()

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(errorResponse)

    try {
      //throw new Error('error')
      goTo('/')
    } catch (error) {
      setErrorResponse('Error al crear el usuario')
    }
  }

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and sell extraordinary products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={'/'}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={img} alt="Image Name" />
            <h3>Let us know you</h3>
          </div>

          <form onSubmit={handleSubmit} className="form grid">
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  value={username || ''}
                  onChange={(e): void => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email || ''}
                  onChange={(e): void => setEmail(e.target.value)}
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
              <span>Sign Up</span>
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

export default Register
