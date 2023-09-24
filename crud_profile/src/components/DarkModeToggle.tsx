'use client'
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'


const DarkModeToggle = () => {
    const {toggle,mode} = useContext(ThemeContext)
    console.log(mode)
  return (
    <div className='w-12 h-6 border border-regal-green rounded-[30px] flex justify-between p-1 items-center relative' onClick={toggle}>
        <div className="text-sm">🌙</div>
        <div className="text-sm">🌞</div>
        <div className="w-5 h-5 rounded-[50%] bg-regal-green absolute duration-300 ease-in-out transition " style={mode === "light" ? { left: "2px" } : { right: "2px" }}/>
    </div>
  )
}

export default DarkModeToggle