import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    href: string,
    icn: string,
    txt1: string,
    txt2: any,
    percentage: string,
}

const JobsAnalyticsCard = ({href, icn, txt1, txt2, percentage} : Props) => {
  return (
    <Link href={href}>
        <div className='h-[120px] w-[260px] bg-jwhite border-2 border-jsgrey rounded-lg font-poppins'>
            <div className='flex flex-col justify-center items-start m-[10px]'>
                <h1 className='text-jblack font-semibold text-[12px]'>{txt1}</h1>
                <div className='flex gap-[10px]'>
                    <Image src={icn} alt='logo' height={22} width={22} className='fill-jblack text-jblack'/>
                    <h1 className='text-[22px] font-normal text-jblack my-[5px]'>{txt2}</h1>
                </div>
                <div className='flex justify-between items-center my-[7px] gap-[40px]'>
                    <h1 className='text-[14px] font-normal text-jgreen'>{percentage}</h1>
                    <p className='text-[12px] font-medium text-jblack text-opacity-20'>vs last week</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default JobsAnalyticsCard