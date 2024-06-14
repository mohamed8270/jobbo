'use client';

import React,{ useState} from 'react'
import SearchBarRepo from './interface/SearchBarRepo';

const HeroSection = () => {
    const img = 'https://img.freepik.com/free-vector/woman-men-teamwork-marketing-corporate_24877-54763.jpg?t=st=1718355181~exp=1718358781~hmac=146955ba629307818629c587a2f3fb43e559cd57e075ec4acc0e8c72cf48c479&w=740';

    const [userJobInput, setuserJobInput] = useState('');

    const handleSubmit = async () => {

    }


  return (
    <div className='font-poppins justify-center items-center flex h-screen'>
        <div className='mx-[40px] flex justify-center items-center gap-[30px]'>
            <div>
                <h1 className='text-jblack text-[38px] font-bold'>Uncover Your Dream Job, Analyze Trends, Master In-Demand Skills with <span className='text-jgreen text-[34px] font-light'>Jobbo</span></h1>
                <p className='text-jblack opacity-50 text-[16px] font-light my-[10px]'> Discover the hottest jobs in your industry or desired field. Jobbo analyzes job postings across various platforms to identify the most sought-after positions and equip you with the knowledge to make informed career choices.</p>
                <SearchBarRepo hinttext='Get job analytics' buttontxt='Find a Job' inputclass='h-[50px] w-[400px]' buttonclass='h-[50px] w-[120px]' formclass='my-[40px]' value={userJobInput} onchange={(e: any) => setuserJobInput(e.target.value)} submit={handleSubmit} />
            </div>
            <div >
                <img src={img} alt="heroimage" height={1400} width={1400}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection