import React from 'react'
import Link from 'next/link';
import { preferencesLinks } from '@/constants/static';

const page = () => {
  return (
    <div className='bg-jbgrey min-h-screen w-screen md:w-full'>
      <div className='pt-[100px] lg:px-[40px] px-[10px]'>
        <div>
          <div className='h-auto  bg-jwhite rounded-md border-2 border-jsgrey p-[10px]'>
            <div>Gradient</div>
            <div>Profile view</div>
          </div>
          <div className='h-auto  bg-jwhite rounded-md border-2 border-jsgrey p-[10px] my-[20px]'>
            <h1 className='text-base font-normal text-jblack'>Preferences</h1>
            {preferencesLinks.map((data) => (
              <Link href={data.path}>
                <div className='flex items-center gap-[10px] my-[20px]'>
                  <img src={data.svg} alt={data.alt} height={20} width={20} />
                  <h1 className='text-xs font-semibold text-jblack'>{data.text}</h1>
                </div>
              </Link>
            ))}
            <div className='flex items-center gap-[10px]'>
              <img src="/assets/icons/notify-outline.svg" alt="support" height={20} width={20} />
              <h1 className='text-xs font-semibold text-jblack'>Notification</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page