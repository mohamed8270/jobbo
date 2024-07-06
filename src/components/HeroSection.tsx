'use client';

import React,{useState, useEffect} from 'react'
import SearchBarRepo from './interface/SearchBarRepo';
import Lottie from "lottie-react";
import heroanimate from '@/public/assets/animations/launch-animate.json';

const HeroSection = () => {
    // const img = 'https://cdni.iconscout.com/illustration/premium/thumb/job-interview-4462381-3702651.png';
  return (
    <div className='font-poppins justify-center items-center flex flex-wrap min-h-screen md:pt-[40px] pt-[50px]'>
        <div className='md:px-[40px] px-[10px] md:flex justify-center md:justify-between items-center gap-[30px]  max-w-7xl w-full'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
                <h1 className='text-jblack text-5xl font-bold md:leading-relaxed leading-snug'>Uncover Your Dream Job, Analyze Trends with <span className='text-jgreen text-5xl font-bold'>Jobbo</span></h1>
                <p className='text-jblack opacity-50 text-sm font-light my-[10px] leading-6 text-justify'>Discover the hottest jobs in your industry or desired field. Jobbo analyzes job postings across various platforms to identify the most sought-after positions and equip you with the knowledge to make informed career choices.</p>
                <SearchBarRepo/>
            </div>
            <div className='md:w-1/2'>
                {/* <img src={img} alt="heroimage"  className='w-full h-auto max-w-md mx-auto'/> */}
                <Lottie animationData={heroanimate} loop={true} low={10} className='w-full h-auto max-w-md mx-auto' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection