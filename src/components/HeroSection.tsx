import React from 'react'

const HeroSection = () => {
    const img = 'https://img.freepik.com/free-vector/woman-men-teamwork-marketing-corporate_24877-54763.jpg?t=st=1718355181~exp=1718358781~hmac=146955ba629307818629c587a2f3fb43e559cd57e075ec4acc0e8c72cf48c479&w=740';
  return (
    <div className='font-poppins justify-center items-center flex h-screen'>
        <div className='mx-[40px]'>
            <div>
                <h1 className='text-jblack text-[34px] font-bold'>Uncover Your Dream Job, Analyze Trends, Master In-Demand Skills with <span className='text-jgreen text-[34px] font-bold'>Jobbo</span></h1>
                <p className='text-jblack opacity-50 text-[16px] font-light my-[10px]'> Discover the hottest jobs in your industry or desired field. Jobbo analyzes job postings across various platforms to identify the most sought-after positions and equip you with the knowledge to make informed career choices.</p>
            </div>
            <div>
                <img src={img} alt="heroimage" height={200} width={200} />
            </div>
        </div>
    </div>
  )
}

export default HeroSection