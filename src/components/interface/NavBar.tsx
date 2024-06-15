import React from 'react'
import Image from 'next/image';

const NavBar = () => {
  return (
    <header className='top-0 left-[260px] right-0 font-poppins bg-jwhite border-b-[2px] border-jsgrey fixed'>
        <nav className='h-[80px] mx-auto flex items-center px-[40px] justify-between'>
            <h1 className='text-jblack text-[16px] font-semibold'>Uncover your perfect job opportunity! 💼</h1>
            <div>
              <Image src="/notify-outline.svg" alt="notify_svg" width={20} height={20} className='inline-block cursor-pointer text-jblack' />
            </div>
        </nav>
    </header>
  )
}

export default NavBar