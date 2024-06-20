import JobsAnalyticsCard from '@/src/components/JobsAnalyticsCard'
import React from 'react'

const Page = () => {
  return (
    <div className='h-screen bg-jbgrey pt-[80px] pl-[40px] pr-[40px] min-h-screen'>
      <div className='py-[40px]'>
        <div className='flex justify-between items-center'>
          <JobsAnalyticsCard href='/' icn='https://www.svgrepo.com/show/509920/eye.svg' txt1='Most viewed' txt2='50,0000' percentage='3.8%' />
          <JobsAnalyticsCard href='/' icn='https://www.svgrepo.com/show/533600/arrow-narrow-circle-broken-up-right.svg' txt1='High paid' txt2='$ 50,0000' percentage='3.8%' />
          <JobsAnalyticsCard href='/' icn='https://www.svgrepo.com/show/533596/arrow-narrow-circle-broken-down-left.svg' txt1='Low paid' txt2='$ 10,000' percentage='3.8%' />
          <JobsAnalyticsCard href='/' icn='https://www.svgrepo.com/show/533306/send.svg' txt1='Most applied' txt2='500' percentage='3.8%' />
        </div>
      </div>
    </div>
  )
}

export default Page