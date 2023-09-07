import React from 'react'
import './top.css'

//Imported icons
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'

//Imported image
import img2 from '../../../assets/logo.png'
import video from '../../../assets/video.mp4'
import Header from '@renderer/components/common/Header'

const Top = (): React.JSX.Element => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti.</h1>
          <p>Hello IsraTech, Welcome back!</p>
        </div>

        <Header />
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world`s fast growing industry today are natural made products!</p>

          <div className="buttons flex">
            <button className="btn">Explore more</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 orders</small>
                </span>
                <span>
                  This month <br /> <small>175 orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image name" />
            </div>
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
      </div>
    </div>
  )
}

export default Top
