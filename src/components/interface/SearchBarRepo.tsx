'use client';

import React,{useState, FormEvent} from 'react'
import Image from 'next/image';
import { isValidJobUrl } from '@/src/utils/JoburlCheck';
import { scrapeAndStoreJobData } from '@/lib/actions';


export default function SearchBarRepo() {

  const [userJobInput, setuserJobInput] = useState('');
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checkedUrl = isValidJobUrl(userJobInput);

    if(!checkedUrl) return alert('Please enter a valid URL');
    try {
      setLoading(true);
      await scrapeAndStoreJobData(userJobInput);
      setuserJobInput('');
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className='flex sm:flex-col justify-between flex-wrap items-center gap-[30px] my-[40px]'>
            <div className='relative'>
                <input type="text" placeholder='Get job analytics' value={userJobInput} onChange={(e) => setuserJobInput(e.target.value)} className='bg-jsgrey text-xs text-jblack font-normal font-poppins outline-none rounded-lg pl-[40px] h-[50px] md:w-[400px] sm:w-auto pr-[10px]' />
                <div className='absolute flex items-center inset-y-0 left-0 pointer-events-none pl-[10px]'>
                  <Image src="/assets/icons/search.svg" alt="search_svg" width={20} height={20} />
                </div>
            </div>
            <button type='submit' disabled={userJobInput === ''} className='bg-jblack rounded-lg text-xs font-poppins font-medium text-jwhite h-[50px] min-w-[120px]'>{Loading ? 'Loading..' : 'Get a job'}</button>
        </form>
    </div>
  )
}



export function SearchJobsData() {

  const [userJobsData, setuserJobsData] = useState('');
  return  (
    <div>
        <form className='flex flex-wrap justify-between items-center gap-[30px] my-[40px]'>
            <div className='relative'>
                <input type="text" placeholder='Search perfect job' value={userJobsData} onChange={(e) => setuserJobsData(e.target.value)} className='bg-jsgrey text-xs text-jblack font-normal font-poppins outline-none rounded-lg pl-[40px] h-[50px] lg:w-[900px]' />
                <div className='absolute flex items-center inset-y-0 left-0 pointer-events-none pl-[10px]'>
                  <Image src="/assets/icons/search.svg" alt="search_svg" width={20} height={20} />
                </div>
            </div>
            <button type='submit' disabled={userJobsData === ''} className='bg-jblack rounded-lg text-xs font-poppins font-medium text-jwhite h-[50px] w-[120px]'>Find a Job</button>
        </form>
    </div>
  )
}

