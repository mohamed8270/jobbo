import React from 'react'
import Image from 'next/image'

interface Props {
    icn: string,
    txt1: string,
    txt2: any,
}

export function JobDetailsInfoSkills({icn, txt1, txt2}: Props) {
  return (
    <div className='h-auto w-auto bg-jsgrey justify-start items-center flex-row gap-[10px] rounded-lg p-[10px]'>
        <div className='flex items-center gap-[10px] my-[5px]'>
            <Image src={icn} alt={txt1} height={17} width={17} />
            <h1 className='text-[12px] font-medium text-jblack text-opacity-40'>{txt1}</h1>
        </div>
        <div className='w-auto overflow-x-auto no-scrollbar flex flex-wrap'>
            {txt2.map((data: any) => (
                <div className='h-auto w-auto bg-jwhite rounded-lg flex-wrap items-center justify-center m-[5px]'>
                    <h1 className='h-auto w-auto p-[10px] text-jblack font-medium text-[12px]'>{data}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export function JobDetailsInfoCard({icn, txt1, txt2}: Props) {
    return (
      <div className='h-auto w-auto bg-jsgrey justify-start items-center flex-row gap-[10px] rounded-lg p-[10px]'>
          <div className='flex items-center gap-[10px] my-[5px]'>
              <Image src={icn} alt={txt1} height={17} width={17} />
              <h1 className='text-[12px] font-medium text-jblack text-opacity-40'>{txt1}</h1>
          </div>
          <h1 className='text-[12px] font-medium text-jblack'>{txt2}</h1>
      </div>
    )
  }