import { getAllJobsData } from '@/lib/actions';
import { SearchJobsData } from '@/src/components/interface/SearchBarRepo'
import { JobsDataCard } from '@/src/components/JobsDataCard';
import React from 'react'

const page = async () => {
  
  const jobsData = await getAllJobsData();

  return (
    <section className='flex flex-wrap flex-col gap-10'>
        <div className='bg-jbgrey md:pt-[80px] pt-[50px] px-[10px] md:px-[40px] min-h-screen'>
          <SearchJobsData/>
          <h1 className='text-sm md:text-lg font-poppins font-semibold text-jblack mb-[20px]'>Trending Jobs</h1>
          <div className='flex flex-wrap gap-x-12 md:gap-y-16 gap-y-6'>
            {jobsData?.map((jobs) => (
              <JobsDataCard key={jobs._id} jobs={jobs} />
            ))}
          </div>
        </div>
    </section>
  )
}

export default page