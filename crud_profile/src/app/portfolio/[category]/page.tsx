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
        <h1 className='font-bold text-2xl'>{params.category}</h1>
        <div className="">
            <div className="">
                <h1 className="font-bold text-2xl">Test</h1>
                <p>Description</p>
                <Button url='#' text='See more'/>
            </div>
            <div className="">
                <Image src='' alt='' fill={true}/>
            </div>
        </div>
    </div>
  )
}

export default Category