'use client';

import React,{ useState} from 'react'
import SearchBarRepo from './interface/SearchBarRepo';

const HeroSection = () => {
    const img = 'https://cdni.iconscout.com/illustration/premium/thumb/job-interview-4462381-3702651.png';

    const [userJobInput, setuserJobInput] = useState('');

    const handleSubmit = async () => {

    }


  return (
    <div className='font-poppins justify-center items-center flex h-screen'>
        <div className='mx-[40px] flex justify-center items-center gap-[30px]'>
            <div>
                <h1 className='text-jblack text-[44px] font-bold'>Uncover Your Dream Job, Analyze Trends with <span className='text-jgreen text-[44px] font-bold'>Jobbo</span></h1>
                <p className='text-jblack opacity-50 text-[14px] font-light my-[10px] leading-6'>Discover the hottest jobs in your industry or desired field. Jobbo analyzes job postings across various platforms to identify the most sought-after positions and equip you with the knowledge to make informed career choices.</p>
                <SearchBarRepo hinttext='Get job analytics' buttontxt='Find a Job' inputclass='h-[50px] w-[400px]' buttonclass='h-[50px] w-[120px]' formclass='my-[40px]' value={userJobInput} onchange={(e: any) => setuserJobInput(e.target.value)} submit={handleSubmit} />
            </div>
            <div >
                <img src={img} alt="heroimage" height={1800} width={1800}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection