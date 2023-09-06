import { useAuth } from '@renderer/app/context/AuthProvider'
import React from 'react'
import { Link } from 'react-router-dom'

const NavbarPortal = (): React.JSX.Element => {
  const auth = useAuth()

  async function handleSignOut(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    try {
      /*const response = await fetch(`${API_URL}/signout`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.getRefreshToken()}`
        }
      })
      if (response.ok) {
        auth.signout()
      }*/
      auth.signout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/me">Profile</Link>
        </li>
        <li>
          <Link to="/me">{auth.getUser()?.username ?? ''}</Link>
        </li>
        <li>
          <a href="#" onClick={handleSignOut}>
            Sign out
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarPortal
