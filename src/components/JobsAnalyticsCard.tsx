import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    href: string,
    icn: string,
    txt1: string,
    txt2: any,
    txt3: any,
    percentage: string,
}

const JobsAnalyticsCard = ({href, icn, txt1, txt2, txt3, percentage} : Props) => {
  return (
    <Link href={href}>
        <div className='h-[120px] w-full md:w-[260px] my-[20px] md:my-[0px] bg-jwhite border-2 border-jsgrey rounded-lg font-poppins'>
            <div className='flex flex-col justify-center items-start m-[10px]'>
                <h1 className='text-jblack font-semibold text-[12px]'>{txt1}</h1>
                <div className='flex gap-[10px]'>
                    <Image src={icn} alt='logo' height={22} width={22} className='fill-jblack text-jblack'/>
                    <h1 className='text-[22px] font-normal text-jblack my-[5px] line-clamp-1'>{txt2}</h1>
                </div>
                <div className='flex justify-between items-center my-[7px] gap-[20px]'>
                    <div className='flex items-center gap-[5px]'>
                        <h1 className='text-[14px] font-normal text-jgreen'>{percentage}</h1>
                        <p className='text-[12px] font-medium text-jblack text-opacity-30'>vs last week</p>
                    </div>
                    <div>
                        <h1 className='text-[10px] font-medium text-jblack'>🔶 {txt3} out of all jobs</h1>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default JobsAnalyticsCard


interface Props2 {
    txt: any,
    quickapply: string,
}

export function JobpopularityAnalytics({txt, quickapply}: Props2) {
    return <div className='h-[60px] w-full bg-indigo-600 flex justify-between items-center gap-[10px] mt-[10px] rounded-lg  px-[10px] font-poppins'>
            <div className='flex items-center gap-[10px]'>
                <div className='h-[30px] w-[4px] bg-jwhite rounded-md'></div>
                <h1 className='md:text-[14px] text-[12px] text-jwhite font-normal'>{txt}% <span className='ml-[3px]'> {Emojitxt(txt)}</span></h1>
            </div>
            <div>
                <Link href={quickapply}><button className='h-[30px] w-[100px] bg-jwhite rounded-full text-[10px] font-medium text-jblack'>Quick Apply</button></Link>
            </div>
            </div>
}

interface Props3 {
    txt1: number,
}
export function Emojitxt({txt1}: Props3) {
    console.log(txt1);
    if (Number(txt1) >= 20) {
        return 'Begginers choice 🙂';
    } else if (Number(txt1) >= 50) {
        return 'Freshers favourite 😊';
    } else if (Number(txt1) >= 70) {
        return 'Intermediate dev 🤗';
    } else if (Number(txt1) >= 100) {
        return 'Top tier 😎';
    } else {
        return 'peoples choice 👍';
    }
}