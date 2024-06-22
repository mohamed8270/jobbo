'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { bottomNavLinks } from '@/constants/static';
import Link from 'next/link'; 

const BottomNavBar = () => {
    const pathname = usePathname();
  return (
    <div className='font-poppins bg-jwhite fixed bottom-0 z-50 left-0 h-[65px] w-full border-t-2 border-jsgrey sm:visible md:hidden'>
        <div className='grid h-full max-w-full justify-items-center grid-cols-5 mx-auto justify-center items-center'>
            {bottomNavLinks.map((data) => (
                <BottomButton href={data.path} btnclass='' spnclass={pathname === data.path ? 'font-bold text-jgreen' : 'font-semibold text-jblack'} txt={data.text} icn={pathname === data.path ? data.svgfil : data.svg} h={pathname === data.path ? 23 : 20} w={pathname === data.path ? 23 : 20} />
            ))}
        </div>
    </div>
  )
}

export default BottomNavBar



interface Props {
    btnclass: string,
    spnclass: string,
    txt: string,
    icn: string,
    h: number,
    w: number,
    href: any,
}

export function BottomButton({btnclass, spnclass, txt, icn, h, w, href}: Props) {
    return <Link href={href}><button type='button' className={`${btnclass} inline-flex flex-col justify-center items-center group gap-[5px]`}>
                <Image src={icn} alt={txt} height={h} width={w} />
                <span className={`text-[10px] ${spnclass} line-clamp-1`}>{txt}</span>
            </button></Link>
}