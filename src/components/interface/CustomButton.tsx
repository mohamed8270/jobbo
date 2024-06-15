import React from 'react'

interface Props {
    btntxt: string,
    btnclass: string,
    divclass: string,
    click: any,
}

const CustomButton = ({btntxt, btnclass, divclass, click}: Props) => {
  return (
    <div className={`${divclass}`}>
        <button onClick={click} className={`${btnclass}`}>{btntxt}</button>
    </div>
  )
}

export default CustomButton