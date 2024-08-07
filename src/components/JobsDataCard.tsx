import React from 'react'
import Link from 'next/link';
import { Jobs } from '@/types';
import Image from 'next/image';
import JobsInfoCard from './JobsInfoCard';
import { extractPopularity } from '@/lib/utils/jobs_analytics';

interface Props {
    jobs: Jobs,
}

export const JobsDataCard = ({jobs}: Props) => {
    const img = 'https://www.svgrepo.com/show/495991/building-3.svg';

  return (
    <Link href={`/jobs/${jobs._id}`} className='sm:w-[340px] sm:max-[340px] w-full flex-1 flex flex-col gap-[20px] rounded-lg font-poppins'>
        <div className='sm:w-[340px] flex-1 flex flex-col relative md:gap-[25px] gap-[20px] p-[15px] rounded-xl bg-jwhite border-2 border-jsgrey'>
            <div className='flex items-center gap-[10px]'>
                <Image src={img} alt='company_logo' height={40} width={40}/>
                <div className='flex flex-col gap-[2px]'>
                    <h1 className='font-poppins text-[18px] font-semibold text-jblack line-clamp-1'>{jobs.jobName}</h1>
                    <p className='font-poppins text-xs font-normal text-jblack opacity-40 line-clamp-1'>{jobs.jobCompany === '' ? 'Company Name Confidential' : jobs.jobCompany}</p>
                </div>
            </div>
            <JobsInfoCard txt1={jobs.jobPosted} txt2={jobs.jobViews} txt3={jobs.jobApplied} style='justify-between' />
            {Number(extractPopularity(jobs)) >= 60 ? 
                <div className='h-[37px] w-full bg-indigo-600 rounded-md flex justify-start items-center'>
                    <div className='h-[20px] w-[4px] bg-jwhite rounded-md ml-[5px]'></div>
                    <div className=' text-jwhite text-[12px] font-normal pl-[10px]'>{extractPopularity(jobs)}% most peoples choice 🔥</div>
                </div> : null
            }
            <div className=''>
                <h1 className='font-poppins text-[11px] font-medium text-jblack opacity-50 leading-5 text-justify md:line-clamp-6 line-clamp-4'>{jobs.jobDescription}</h1>
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='font-poppins text-sm font-semibold text-jgreen'>₹ {jobs.jobSalary == '' ? 'Not Specified' : jobs.jobSalary} <span className='font-poppins text-[12px] font-medium text-jblack opacity-40'>/Month</span></h1>
                <Link href={jobs.jobApply}><button className='font-poppins h-[40px] w-[100px] bg-jgreen text-jwhite text-[12px] font-medium rounded-lg hover:text-jgreen hover:border-2 hover:border-jgreen hover:bg-jwhite'>Apply Now</button></Link>
            </div>
        </div>
    </Link>
  )
}
