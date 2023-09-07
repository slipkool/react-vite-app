import React from 'react'
import './portal.css'
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import Activity from './Activity Section/Activity'

const Portal = (): React.JSX.Element => {
  return (
    <div className="mainContent">
      <Top />

      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  )
}

export default Portal
