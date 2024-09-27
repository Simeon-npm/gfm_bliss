import React from 'react'
import { GiElectric } from "react-icons/gi";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import dropdownState from './dropdown-state';


const nav = ({forceReRender}) => {
  const {state, toggleState} = dropdownState();
  
  
  return (
    <div className='sticky top-[0] flex items-center justify-between px-10 sm:px-5 py-5 bg-primary text-white'>
        <div className='flex items-center text-2xl font-bold'>
            <GiElectric className='text-subordinate text-4xl' />
            GFM Bliss
        </div>

        <div className='flex gap-10 md:hidden'>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>

        <button className='md:hidden bg-subordinate text-black px-7 py-2 font-semibold rounded'>Get free quote</button>
        {state ? <IoClose className='text-4xl hover:text-subordinate hidden md:block' onClick={()=>(toggleState(), forceReRender())} />:<MdOutlineMenuOpen className='text-4xl hover:text-subordinate hidden md:block' onClick={()=>(toggleState(), forceReRender())} />}

        {state && 
        <div className='bg-white p-4 absolute w-full left-0 mt-[250px] text-black flex flex-col gap-4 items-center'>

         <a onClick={()=>(toggleState(), forceReRender())} href="#home">Home</a>
         <a onClick={()=>(toggleState(), forceReRender())} href="#services">Services</a>
         <a onClick={()=>(toggleState(), forceReRender())} href="#about">About</a>
         <a onClick={()=>(toggleState(), forceReRender())} href="#contact">Contact</a>

        </div> }
        
    </div>
  )
}

export default nav