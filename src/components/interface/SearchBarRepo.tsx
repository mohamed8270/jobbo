'use client';

import React,{useState} from 'react'
import Image from 'next/image';


export default function SearchBarRepo() {

  const [userJobInput, setuserJobInput] = useState('');

  return (
    <div>
        <form className='flex items-center gap-[30px] my-[40px]'>
            <div className='relative'>
                <input type="text" placeholder='Get job analytics' value={userJobInput} onChange={(e) => setuserJobInput(e.target.value)} className='bg-jsgrey text-[12px] text-jblack font-normal font-poppins outline-none rounded-lg pl-[40px] h-[50px] w-[400px]' />
                <div className='absolute flex items-center inset-y-0 left-0 pointer-events-none pl-[10px]'>
                  <Image src="/search.svg" alt="search_svg" width={20} height={20} />
                </div>
            </div>
            <button type='submit' disabled={userJobInput === ''} className='bg-jblack rounded-lg text-[12px] font-poppins font-medium text-jwhite h-[50px] w-[120px]'>Extract Data</button>
        </form>
    </div>
  )
}



export function SearchJobsData() {

  const [userJobsData, setuserJobsData] = useState('');
  return  (
    <div>
        <form className='flex items-center gap-[30px] my-[40px]'>
            <div className='relative'>
                <input type="text" placeholder='Search perfect job' value={userJobsData} onChange={(e) => setuserJobsData(e.target.value)} className='bg-jsgrey text-[12px] text-jblack font-normal font-poppins outline-none rounded-lg pl-[40px] h-[50px] w-[800px]' />
                <div className='absolute flex items-center inset-y-0 left-0 pointer-events-none pl-[10px]'>
                  <Image src="/search.svg" alt="search_svg" width={20} height={20} />
                </div>
            </div>
            <button type='submit' disabled={userJobsData === ''} className='bg-jblack rounded-lg text-[12px] font-poppins font-medium text-jwhite h-[50px] w-[120px]'>Find a Job</button>
        </form>
    </div>
  )
}

