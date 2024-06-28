import React from 'react'
import Image from 'next/image';

interface Props {
    txt1: string,
    txt2: string,
    txt3: string,
    style: string,
}

const JobsInfoCard = ({txt1, txt2, txt3, style}: Props) => {
    const icn1 = 'https://www.svgrepo.com/show/499655/time.svg';
    const icn2 = 'https://www.svgrepo.com/show/532493/eye.svg';
    const icn3 = 'https://www.svgrepo.com/show/533306/send.svg';
  return (
    <div className={`flex items-center gap-[5px] ${style}`}>
        <div className='h-[37px] w-[100px] bg-jsgrey flex items-center justify-center font-poppins gap-[3px] rounded-md'>
            <Image src={icn1} alt={txt1} height={17} width={17} className='fill-jblack text-jblack'/>
            <p className='text-[10px] font-semibold text-jblack'>{txt1 === '' ? '1 day ago' : txt1}</p>
        </div>
        <div className='h-[37px] w-[100px] bg-jsgrey flex items-center justify-center font-poppins gap-[3px] rounded-md'>
            <Image src={icn2} alt={txt2} height={17} width={17} className='fill-jblack text-jblack'/>
            <p className='text-[10px] font-semibold text-jblack'>{txt2}</p>
        </div>
        <div className='h-[37px] w-[100px] bg-jsgrey flex items-center justify-center font-poppins gap-[3px] rounded-md'>
            <Image src={icn3} alt={txt3} height={17} width={17} className='fill-jblack text-jblack'/>
            <p className='text-[10px] font-semibold text-jblack'>{txt3}</p>
        </div>
    </div>
  )
}

export default JobsInfoCard