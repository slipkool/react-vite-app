import Sidebar from '@renderer/components/Dashboard/Sidebar Section/Sidebar'
import React from 'react'

interface PortalLayoutProps {
  children?: React.ReactNode
}

export default function PortalLayout({ children }: PortalLayoutProps): React.JSX.Element {
  return (
    <>
      <div className="dashboard flex">
        <div className="dashboardContainer flex">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  )
}
