import React from 'react'
import Image from 'next/image';

interface Props {
    hinttext: string,
    buttontxt: string,
    inputclass: string,
    buttonclass: string,
    formclass: string,
    value: any,
    onchange: any,
    submit: VoidFunction,
}

const SearchBarRepo = ({hinttext, buttontxt, inputclass, buttonclass, submit, value, onchange, formclass}: Props) => {
  return (
    <div>
        <form onSubmit={submit} className={`flex items-center gap-[30px] ${formclass}`}>
            <div className='relative'>
                <input type="text" placeholder={hinttext} value={value} onChange={onchange} className={`bg-jsgrey text-[12px] text-jblack font-normal font-poppins outline-none rounded-lg pl-[40px] ${inputclass}`} />
                <div className='absolute flex items-center inset-y-0 left-0 pointer-events-none pl-[10px]'>
                  <Image src="/search.svg" alt="search_svg" width={20} height={20} />
                </div>
            </div>
            <button type='submit' disabled={value === ''} className={`bg-jblack rounded-lg text-[12px] font-poppins font-medium text-jwhite ${buttonclass}`}>{buttontxt}</button>
        </form>
    </div>
  )
}

export default SearchBarRepo