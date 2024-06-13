'use client';

import React,{useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import { getJobsData } from '@/lib/actions';

const HomePage = () => {

  const [jobsOutput, setjobsOutput] = useState([]);

  useEffect(() => {
    const getjobs = async () => {
     try {
      const output = await getJobsData();
      setjobsOutput(output.data);
     } catch (error) {
      throw new Error(`${error}`);
     }
    }
  
    getjobs();
  }, [])
  

  return (
    <>
      <div className='bg-jbgrey h-screen pl-[260px]'>
        <NavBar/>

      </div>
    </>
  )
}

export default HomePage