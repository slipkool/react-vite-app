/* import { useAuth } from '@renderer/app/context/AuthProvider' */
import PortalLayout from '@renderer/app/layout/PortalLayout'
import Body from '@renderer/components/Dashboard/Body Section/Portal/Body'
import React from 'react'

const Dashboard = (): React.JSX.Element => {
  /* const auth = useAuth() */

  return (
    <PortalLayout>
      {/*       <div>Dashboard de {auth.getUser()?.name ?? ''}</div> */}
      <Body />
    </PortalLayout>
  )
}

export default Dashboard
