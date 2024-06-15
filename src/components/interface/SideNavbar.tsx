'use client'

import { navLinks } from '@/constants/static';
import React from 'react'
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const SideNavbar = () => {
    const pathname = usePathname();
    const imglink = 'https://freesvg.org/img/ethereum-classic-logo.png';
  return (
    <div className='bg-jwhite font-poppins h-screen top-0 left-0 fixed w-[260px] border-r-[2px] border-jsgrey'>
        <div className='flex flex-col py-[20px] px-[30px]'>
            <div className='flex items-center gap-[15px]'>
                <img src={imglink} alt="logo" height={40} width={40} />
                <h1 className='text-[24px] text-jblack font-semibold'>Jobbo</h1>
            </div>
            <h1 className='text-[14px] text-jblack opacity-30 font-light mt-[30px]'>MAIN MENU</h1>
            <div className='pt-[20px]'>
                {navLinks.map((data) => (
                    <Link key={data.text} href={data.path}>
                        <div className={`h-[50px] py-[10px] flex items-center rounded-r-md my-[10px] ${pathname == data.path ? 'bg-jgreenl': 'bg-jwhite'}`}>
                            <div className={`h-[50px] w-[4px] rounded-md mr-[20px] ${pathname === data.path ? 'bg-jgreen': 'bg-jwhite'}`}></div>
                            <Image src={pathname === data.path ? data.svgfil : data.svg} alt={data.text} height={pathname === data.path ? 23 : 20} width={pathname === data.path ? 23 : 20} className='mr-[10px]'/>
                            <h1 className={`text-[12px] ${pathname === data.path ? 'font-bold text-jgreen' : 'font-semibold text-jblack'}`}>{data.text}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SideNavbar