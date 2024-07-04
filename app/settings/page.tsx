import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='bg-jbgrey min-h-screen'>
      <div>
        <Link href='/support'>Support</Link>
      </div>
    </div>
  )
}

export default page