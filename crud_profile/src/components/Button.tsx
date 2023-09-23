import { CustomButtonProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const Button = ({text,url}:CustomButtonProps) => {
  return (
    <Link href={url}>
        <button className="p-4 cursor-pointer bg-regal-green rounded-md w-max text-white">{text}</button>
    </Link>
  )
}

export default Button