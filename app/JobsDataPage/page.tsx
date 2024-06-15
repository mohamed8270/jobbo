import { getAllJobsData } from '@/lib/actions';
import { SearchJobsData } from '@/src/components/interface/SearchBarRepo'
import { JobsDataCard } from '@/src/components/JobsDataCard';
import React from 'react'

const page = async () => {

  const jobsData = await getAllJobsData();

  return (
    <section className='flex flex-col gap-10'>
        <div className='bg-jbgrey pt-[80px] pl-[40px] pr-[40px] min-h-screen'>
          <SearchJobsData/>
          <div className='flex flex-wrap gap-x-12 gap-y-16'>
            {jobsData?.map((jobs) => (
              <JobsDataCard key={jobs._id} jobs={jobs} />
            ))}
          </div>
        </div>
    </section>
  )
}

export default page