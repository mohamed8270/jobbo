import React from 'react'

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
            <input type="text" placeholder={hinttext} value={value} onChange={onchange} className={`bg-jsgrey text-[12px] text-jblack font-light font-poppins outline-none rounded-md pl-[10px] ${inputclass}`} />
            <button type='submit' disabled={value === ''} className={`bg-jblack rounded-md text-[12px] font-poppins font-semibold text-jwhite ${buttonclass}`}>{buttontxt}</button>
        </form>
    </div>
  )
}

export default SearchBarRepo