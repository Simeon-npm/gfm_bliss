import React from 'react'
import { GiElectric } from "react-icons/gi";


const footer = () => {
  return (
    <div className='bg-primary text-white py-5 px-10 flex justify-between sm:flex-col items-center'>
        <div className='flex  items-center text-2xl font-bold'>
            <GiElectric className='text-subordinate text-4xl' />
            GFM Bliss
        </div>

        <h1 className=''>&copy;2024 GFM Bliss. All rights reserved.</h1>

        <div></div>
    </div>
  )
}

export default footer