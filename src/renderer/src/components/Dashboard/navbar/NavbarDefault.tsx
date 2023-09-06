import React from 'react'
import { Link } from 'react-router-dom'

const NavbarDefault = (): React.JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarDefault
