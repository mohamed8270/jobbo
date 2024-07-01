import { getJobsDetails } from '@/lib/actions'
import { Jobs } from '@/types'
import { redirect } from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import JobsInfoCard from '@/src/components/JobsInfoCard';
import Link from 'next/link';
import WelComeMailModal from '@/src/components/modals/WelMailModal';
import { JobDetailsInfoCard, JobDetailsInfoSkills } from '@/src/components/interface/JobDetailsInfoCard';
import { extractPopularity } from '@/lib/utils/jobs_analytics';
import { JobpopularityAnalytics } from '@/src/components/JobsAnalyticsCard';

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
            <div className='lg:flex justify-between items-center sticky top-5 bg-jwhite lg:px-[40px] px-[10px]'>
                <div className='flex justify-start items-center gap-[20px]'>
                    <Image src={img} alt='logo' height={80} width={80}/>
                    <div>
                        <h1 className='lg:text-[42px] text-jblack font-normal'>{job.jobName}</h1>
                        <Link href={job.jobCompanyUrl} className='text-[14px] font-normal text-jblack text-opacity-40 hover:underline'>{job.jobCompany === '' ? 'Company Name Confidential' : job.jobCompany}</Link>
                    </div>
                </div>
                <div className='flex gap-[20px]'>
                    {/* <button className='font-poppins h-[40px] w-[120px]  text-jblack text-[12px] font-medium rounded-lg hover:text-jblack border-2 border-jsgrey hover:bg-jsgrey'>🔔  Get Notified</button> */}
                    <WelComeMailModal jobId={id} />
                    <Link href={job.jobApply}><button className='font-poppins h-[40px] w-[100px] bg-jgreen text-jwhite text-[12px] font-medium rounded-lg hover:text-jgreen hover:border-2 hover:border-jgreen hover:bg-jwhite'>Apply Now</button></Link>
                </div>
            </div>
            <div className='mt-[40px] lg:mx-[40px] mx-[10px]'>
                <div className='flex items-center gap-[10px] my-[10px]'>
                    <div className='h-[30px] w-[5px] bg-jgreen rounded-r-md'></div>
                    <h1 className='text-[16px] font-light text-jgreen'>$ {job.jobSalary === '' ? 'Not specified' : job.jobSalary} <span className='text-[12px] font-light text-jblack text-opacity-40'>/per annum</span></h1>
                </div>
                <JobsInfoCard txt1={job.jobPosted} txt2={job.jobViews} txt3={job.jobApplied} style='gap-4' />
                <JobpopularityAnalytics txt={extractPopularity(job)} quickapply={job.jobQuickApply}/>
                <div className='mt-[30px] flex gap-[10px] items-center'>
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
                <div className='py-[10px] pb-[20px]'>
                    <div className='text-jblack text-[12px]'>{job.jobDescription}</div>
                    <h1 className='text-jblack text-[14px] font-semibold mt-[20px] mb-[10px]'>More Info</h1>
                    <div className='grid md:justify-start sm:justify-between items-center gap-[20px] sm:grid-cols-2 md:grid-cols-3'>
                        <JobDetailsInfoCard icn='https://www.svgrepo.com/show/507547/briefcase-alt.svg' txt1='JOB TYPE' txt2={job.jobType} />
                        <JobDetailsInfoCard icn='https://www.svgrepo.com/show/505362/document-filled.svg' txt1='FUNCTION' txt2={job.jobFunction} />
                        <JobDetailsInfoCard icn='https://www.svgrepo.com/show/435823/company.svg' txt1='INDUSTRY' txt2={job.jobIndustry} />
                        <JobDetailsInfoSkills icn='https://www.svgrepo.com/show/20852/brain.svg' txt1='SKILLS' txt2={job.jobSkillsets} />
                        <JobDetailsInfoSkills icn='https://www.svgrepo.com/show/14441/managers.svg' txt1='JOB ROLES' txt2={job.jobRole} />
                    </div>
                </div>
                <div className='pb-[80px]'>
                    <div className='h-[2px] w-auto bg-jsgrey'></div>
                    <div className='flex justify-between items-center py-[20px]'>
                        <div className='flex-row justify-start items-center'>
                            <Link href={job.jobCompanyUrl} ><div className='text-jgreen text-[14px] font-medium my-[10px]'><span className='text-jblack text-[14px] font-medium'>About</span>  {job.jobCompany === '' ? 'Confidential' : job.jobCompany}</div></Link>
                            <Link href={job.jobSource === '' ? job.jobCompanyUrl : job.jobSource}><div className='text-jgreen text-[12px] font-medium'><span className='text-jblack text-[12px] font-medium'>Source:</span>  {job.jobSource === '' ? 'Visit official' : job.jobSource}</div></Link>
                        </div>
                        <div>
                            <button className='font-poppins h-[40px] w-[120px]  text-jgreen text-[12px] font-medium rounded-lg hover:text-jwhite border-2 border-jgreen hover:bg-jgreen'>Follow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobsDetailsPage