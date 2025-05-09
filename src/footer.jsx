import React from 'react'
import { GiElectric } from "react-icons/gi";


const footer = () => {
  return (
    <div className='bg-primary text-white sm:text-center py-5 px-10 flex justify-between sm:flex-col items-center'>
        <div className='flex  items-center text-2xl font-bold'>
            <GiElectric className='text-subordinate text-4xl' />
            GFM Bliss
        </div>

        <p className=''>All rights reserved. GFM Bliss - &copy; {new Date().getFullYear()}</p>

        
    </div>
  )
}

export default footer