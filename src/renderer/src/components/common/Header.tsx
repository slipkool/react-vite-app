import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@renderer/contexts/AuthContext'

//Imported icons
import { BiSearchAlt, BiMessageRoundedDots } from 'react-icons/bi'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { IoIosLogOut } from 'react-icons/io'

//Imported image
import img from '../../assets/logo.png'

const Header = (): React.JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false)
  const { signout } = useAuth()

  const toggleMenu = (): void => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <div className="searchBar flex">
        <input type="text" placeholder="Search..." />
        <BiSearchAlt className="icon" />
      </div>

      <div className="adminDiv flex">
        <BiMessageRoundedDots className="icon" />
        <MdOutlineNotificationsNone className="icon" />
        <div className="adminImage">
          <img src={img} alt="Admin Image" onClick={(): void => toggleMenu()} />

          <div className={openMenu ? 'sub-menu-wrap open-menu' : 'sub-menu-wrap'}>
            <div className="sub-menu">
              <div className="user-info">
                <img src={img} alt="" />
                <h2>James Aldrino</h2>
              </div>
              <hr />

              <a href="#" className="sub-menu-link">
                <CgProfile className="icon" />
                <p>Edit profile</p>
                <span>&gt;</span>
              </a>
              <Link to="/" onClick={(): void => signout()} className="sub-menu-link">
                <IoIosLogOut className="icon" />
                <p>Sign Out</p>
                <span>&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
