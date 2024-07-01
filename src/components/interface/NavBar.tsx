import React from 'react'
import Image from 'next/image';
import Link from 'next/link'; 

const NavBar = () => {
  return (
    <header className='md:top-0 md:left-[260px] md:right-0 font-poppins bg-jwhite border-b-[2px] border-jsgrey fixed w-full'>
        <nav className='h-[65px] mx-auto flex items-center md:px-[40px] px-[10px] justify-between'>
            <div className='flex justify-start items-center'>
              <div className='md:hidden visible mr-[15px]'>
                <Link href='/details'><Image src="/assets/icons/menu.svg" alt="menu_svg" width={25} height={25} className='inline-block cursor-pointer text-jblack' /></Link>
              </div>
              <h1 className='text-jblack md:text-[16px] text-[13px] font-semibold'>Uncover your perfect job opportunity! 💼</h1>
            </div>
            <div className='md:visible visible'>
              <Image src="/assets/icons/notify-outline.svg" alt="notify_svg" width={23} height={23} className='inline-block cursor-pointer text-jblack' />
            </div>
        </nav>
    </header>
  )
}

export default NavBar