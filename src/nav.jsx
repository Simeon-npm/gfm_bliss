import React from 'react'
import { GiElectric } from "react-icons/gi";
import { MdOutlineMenuOpen } from "react-icons/md";

const nav = () => {
  return (
    <div className='flex items-center justify-between px-10 sm:px-5 py-5 bg-primary text-white'>
        <div className='flex items-center text-2xl font-bold'>
            <GiElectric className='text-subordinate text-4xl' />
            GFM Bliss
        </div>

        <div className='flex gap-10 md:hidden'>
            <a href="###">Home</a>
            <a href="###">Services</a>
            <a href="###">About</a>
            <a href="###">Contact</a>
        </div>

        <button className='md:hidden bg-subordinate text-black px-7 py-2 font-semibold rounded'>Get free quote</button>
        <MdOutlineMenuOpen className='text-4xl hover:text-subordinate hidden md:block' />
        
    </div>
  )
}

export default nav