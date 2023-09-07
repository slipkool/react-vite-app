import React from 'react'
import './sidebar.css'
//imported image
import logo from '../../assets/logo.png'

//imported icons
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Sidebar = (): React.JSX.Element => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Logo" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <Link to="/dashboard" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/users" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">My Orders</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/me" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/me" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <Link to="/me" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/me" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/me" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/me" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help center</h3>
          <p>Having problem in Planti, please contact us from for more questions.</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
