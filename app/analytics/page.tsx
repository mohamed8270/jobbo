import { getAllJobsData } from '@/lib/actions'
import { extractJobappliedAverage, extractJobapplyCount, extractJobHighpay, extractJoblowpay, extractJobviewsAverage, extractJobviewsCount } from '@/lib/utils/jobs_analytics';
// import  {JobDataGraph}  from '@/src/components/graph_data/JobDataGraph';
import JobsAnalyticsCard from '@/src/components/JobsAnalyticsCard'
import React from 'react'

const Page = async () => {
  const jobsdata = await getAllJobsData();

  const jobsdatagraph = jobsdata.map((job) => ({
    jobName: job.jobName,
    jobAppliedValue: job.jobAppliedValue,
    jobViewsValue: job.jobViewsValue,
  }));

  return (
    <div className='h-screen bg-jbgrey pt-[80px] px-[10px] md:pl-[40px] md:pr-[40px] min-h-screen w-screen md:w-full'>
      <div className='md:pt-[40px]'>
        <div className='sm:flex-row md:flex justify-between items-center'>
          <JobsAnalyticsCard href='/' icn='https://www.svgrepo.com/show/509920/eye.svg' txt1='Most viewed' txt2={extractJobviewsAverage(jobsdata)} txt3={extractJobviewsCount(jobsdata)} percentage='3.8%' />
          <JobsAnalyticsCard href='/' icn='https://www.svgrepo.com/show/533600/arrow-narrow-circle-broken-up-right.svg' txt1='High paid' txt2={extractJobHighpay(jobsdata)} txt3='' percentage='3.8%' />
          <JobsAnalyticsCard href='/' icn='https://www.svgrepo.com/show/533596/arrow-narrow-circle-broken-down-left.svg' txt1='Low paid' txt2={extractJoblowpay(jobsdata)} txt3='' percentage='3.8%' />
          <JobsAnalyticsCard href='/' icn='https://www.svgrepo.com/show/533306/send.svg' txt1='Most applied' txt2={extractJobappliedAverage(jobsdata)} txt3={extractJobapplyCount(jobsdata)} percentage='3.8%' />
        </div>
        <div className='pt-[40px]'>
          {/* <JobDataGraph ChartData={jobsdatagraph} /> */}
        </div>
      </div>
    </div>
  )
}

export default Page