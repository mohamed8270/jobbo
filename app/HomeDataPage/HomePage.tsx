import React from 'react'
import NavBar from '../../src/components/NavBar'
import HeroSection from '../../src/components/HeroSection'

const HomePage = () => {
  return (
    <>
      <div className='bg-jbgrey h-screen pl-[260px]'>
        <NavBar/>
        <HeroSection/>
      </div>
    </>
  )
}

export default HomePage