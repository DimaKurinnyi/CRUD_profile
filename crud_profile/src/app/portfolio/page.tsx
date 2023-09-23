import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <h1 className="font-extrabold text-2xl my-6">Choose a gallery</h1>
      <div className="flex gap-14">
        <Link href='/portfolio/illustrations' className="group border-4 border-[#bbb] rounded-md w-[300px] h-[400px] relative  bg-illustration bg-cover " >
          <span className='absolute right-3 bottom-3 text-4xl font-bold group-hover:text-regal-green' >illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className="group border-4 border-[#bbb] rounded-md w-[300px] h-[400px] relative bg-websites bg-cover ">
          <span className="absolute right-3 bottom-3 text-4xl font-bold group-hover:text-regal-green" >websites</span>
        </Link>
        <Link href='/portfolio/applications' className="group border-4 border-[#bbb] rounded-md w-[300px] h-[400px] relative  bg-apps bg-cover">
          <span className="absolute right-3 bottom-3 text-4xl font-bold group-hover:text-regal-green">applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio