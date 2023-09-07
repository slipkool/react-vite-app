import Portal from '@renderer/components/Home Section/Portal'
import HomeLayout from '@renderer/layouts/HomeLayout'
import React from 'react'

const Home = (): React.JSX.Element => {
  return (
    <HomeLayout>
      <Portal />
    </HomeLayout>
  )
}

export default Home
