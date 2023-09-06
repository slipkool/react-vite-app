import NavbarDefault from '@renderer/components/Dashboard/navbar/NavbarDefault'
import React from 'react'

interface DefaultLayourProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayourProps): React.JSX.Element => {
  return (
    <>
      <header>
        <NavbarDefault />
      </header>

      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
