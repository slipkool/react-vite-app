import React from 'react'
import Sidebar from '@renderer/components/Sidebar Section/Sidebar'
import Header from '@renderer/components/common/Header'

interface HomeLayourProps {
  children: React.ReactNode
}

const AdminLayout = ({ children }: HomeLayourProps): React.JSX.Element => {
  return (
    <div className="dashboard flex">
      <div className="dashboardContainer flex">
        <Sidebar />
        <div className="mainContent">
          <div className="topSection">
            <div className="headerSection flex">
              <Header />
            </div>
          </div>
          <div className="bottom flex">
            <>{children}</>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
