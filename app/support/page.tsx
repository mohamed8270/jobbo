'use client';

import React from 'react'
import Lottie from "lottie-react";
import supportanimate from '@/public/assets/animations/support-animate.json';
import { SupportBtn } from '@/src/utils/check_utils';

const page = () => {
  const whatsapp = '/assets/icons/whatsapp-outline.svg'
  const call = '/assets/icons/call-outline.svg';
  const mail = '/assets/icons/mail-outline.svg';
  return (
    <div className='bg-jbgrey min-h-screen'>
      <div className='font-poppins pt-[100px] lg:px-[40px] px-[10px]'>
        <div className='md:flex justify-between items-center gap-[50px]'>
          <div>
            <div>
              <p className='text-xs text-jblack font-normal pb-[2px]'>Connect with support team</p>
              <div className='h-[3px] w-[180px] bg-jgreen bg-opacity-80 rounded-full'></div>
            </div>
            <h1 className='md:text-[56px] text-[40px] text-jblack md:font-semibold font-bold'>Exceed <br/>expectation with <br/>personal touches</h1>
            <p className='text-xs font-medium text-jblack text-opacity-40 mt-[20px]'>Get to know us <span className='text-jblack'>👇</span></p>
            <div className='flex justify-start items-center gap-[20px] py-[20px]'>
              <SupportBtn txt={call} />
              <SupportBtn txt={whatsapp} />
              <SupportBtn txt={mail} />
            </div>
          </div>
          <div className='md:w-1/2'>
            <Lottie animationData={supportanimate} loop={true} className='w-full h-auto max-w-md mx-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page




