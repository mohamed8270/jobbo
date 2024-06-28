import React from 'react'
import Image from 'next/image';
import Link from 'next/link'; 

const NavBar = () => {
  return (
    <header className='md:top-0 md:left-[260px] md:right-0 font-poppins bg-jwhite border-b-[2px] border-jsgrey fixed'>
        <nav className='h-[80px] mx-auto flex items-center md:px-[40px] px-[20px] justify-between'>
            <div className='md:hidden visible mr-[20px]'>
              <Link href='/JobsDataPage'><Image src="/assets/icons/menu.svg" alt="menu_svg" width={25} height={25} className='inline-block cursor-pointer text-jblack' /></Link>
            </div>
            <h1 className='text-jblack text-[16px] font-semibold'>Uncover your perfect job opportunity! 💼</h1>
            <div className='md:visible invisible'>
              <Image src="/assets/icons/notify-outline.svg" alt="notify_svg" width={20} height={20} className='inline-block cursor-pointer text-jblack' />
            </div>
        </nav>
    </header>
  )
}

export default NavBar