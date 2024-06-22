import { getJobsDetails } from '@/lib/actions'
import { Jobs } from '@/types'
import { redirect } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import JobsInfoCard from '@/src/components/JobsInfoCard';
import Link from 'next/link';

type Props = {
    params: {id: string},
}

const JobsDetailsPage = async ({params: {id}}: Props) => {

    const job: Jobs = await getJobsDetails(id);
    if(!job) redirect('/');

    const img = 'https://www.svgrepo.com/show/495991/building-3.svg';

  return (
    <div className='bg-jwhite min-h-screen font-poppins'>
        <div className='pt-[100px]'>
            <div className='lg:flex justify-between items-center sticky top-5 bg-jwhite lg:px-[40px] px-[20px]'>
                <div className='flex justify-center items-center gap-[20px]'>
                    <Image src={img} alt='logo' height={80} width={80}/>
                    <div>
                        <h1 className='lg:text-[42px] text-jblack font-normal'>{job.jobName}</h1>
                        <Link href={job.jobCompanyUrl} className='text-[14px] font-normal text-jblack text-opacity-40 hover:underline'>{job.jobCompany}</Link>
                    </div>
                </div>
                <div className='flex gap-[20px]'>
                    <button className='font-poppins h-[40px] w-[120px]  text-jblack text-[12px] font-medium rounded-lg hover:text-jblack border-2 border-jsgrey hover:bg-jsgrey'>🔔  Get Notified</button>
                    <Link href={job.jobApply}><button className='font-poppins h-[40px] w-[100px] bg-jgreen text-jwhite text-[12px] font-medium rounded-lg hover:text-jgreen hover:border-2 hover:border-jgreen hover:bg-jwhite'>Apply Now</button></Link>
                </div>
            </div>
            <div className='mt-[40px] lg:mx-[40px] mx-[20px]'>
                <div className='flex items-center gap-[10px] my-[10px]'>
                    <div className='h-[30px] w-[5px] bg-jgreen rounded-r-md'></div>
                    <h1 className='text-[16px] font-light text-jgreen'>$ {job.jobSalary === '' ? 'Not specified' : job.jobSalary} <span className='text-[12px] font-light text-jblack text-opacity-40'>/per annum</span></h1>
                </div>
                <JobsInfoCard txt1={job.jobPosted} txt2={job.jobViews} txt3={job.jobApplied} style='gap-4' />
                <div className='mt-[40px] flex gap-[10px] items-center'>
                    <div className='flex gap-[10px]'>
                        <Image src='https://www.svgrepo.com/show/532539/location-pin.svg' alt='location' height={15} width={15}/>
                        <h1 className='text-[14px] font-light text-jblack'>{job.jobPlace}</h1>
                    </div>
                    <div className='h-[20px] w-[1.5px] bg-jblack opacity-10 rounded-md'></div>
                    <div className='flex gap-[10px]'>
                        <Image src='https://www.svgrepo.com/show/507547/briefcase-alt.svg' alt='location' height={15} width={15}/>
                        <h1 className='text-[14px] font-light text-jblack'>{job.jobExperience}</h1>
                    </div>
                </div>
                <div className='text-jblack py-[10px] text-justify text-[12px]'>
                    {job.jobDescription}
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobsDetailsPage