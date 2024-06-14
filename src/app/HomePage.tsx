import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'

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