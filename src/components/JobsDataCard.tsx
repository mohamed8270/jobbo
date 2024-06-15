import React from 'react'
import Link from 'next/link';
import { Jobs } from '@/types';
import Image from 'next/image';
import CustomButton from './interface/CustomButton';

interface Props {
    jobs: Jobs,
}

export const JobsDataCard = ({jobs}: Props) => {
    const img = 'https://www.svgrepo.com/show/380993/google-logo-search-new.svg';

    // const handleApply =  (data: any) =>{
    //     <Link href={data}></Link>
    // }

  return (
    <Link href={``} className='w-[340px] flex-1 flex flex-col gap-[20px] rounded-lg font-poppins'>
        <div className='w-[340px] flex-1 flex flex-col relative gap-[10px] p-[10px] rounded-lg border-2 border-jsgrey'>
            <div className='flex items-center gap-[10px]'>
                <Image src={img} alt='logo' height={30} width={30}/>
                <div className='flex flex-col gap-[2px]'>
                    <h1 className='font-poppins text-[16px] font-semibold text-jblack'>{jobs.jobName}</h1>
                    <p className='font-poppins text-[12px] font-medium text-jblack opacity-40'>{jobs.jobCompany}</p>
                </div>
            </div>
            <div className='my-[10px]'>
                <h1 className='font-poppins text-[12px] font-medium text-jblack opacity-40'>{jobs.jobDescription}</h1>
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='font-poppins text-[18px] font-semibold text-jgreen'>₹{jobs.jobSalary}</h1>
                <button className='font-poppins h-[40px] w-[80px] bg-jgreen text-jwhite text-[12px] font-semibold rounded-lg'>Apply</button>
            </div>
        </div>
    </Link>
  )
}
