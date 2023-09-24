import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
interface ParamsProps{
    params:{category:string}
}

const Category = ({params}:ParamsProps) => {
    console.log(params)
  return (
    <div>
        <h1 className='font-bold text-2xl text-regal-green'>{params.category}</h1>
        <div className="flex gap-12 mt-12 mb-24 odd:flex-row-reverse">
            <div className="flex-1 flex flex-col gap-5 justify-center"> 
                <h1 className="font-bold text-6xl">Test</h1>
                <p className='text-lg'>Description</p>
                <Button url='#' text='See more'/>
            </div>
            <div className="flex-1 relative h-[500px]">
                <Image src='https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill={true} className='object-cover'/>
            </div>
        </div>
        <div className="flex gap-12 mt-12 mb-24 odd:flex-row-reverse">
            <div className="flex-1 flex flex-col gap-5 justify-center"> 
                <h1 className="font-bold text-2xl">Test</h1>
                <p>Description</p>
                <Button url='#' text='See more'/>
            </div>
            <div className="flex-1 relative h-[500px]">
                <Image src='https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill={true} className='object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Category