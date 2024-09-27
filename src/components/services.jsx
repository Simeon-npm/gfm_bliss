import React from 'react'
import { servicesData } from '../constants'

const services = () => {
  return (
    <div id='services' className='flex flex-col items-center py-20 gap-10'>
        <h1 className='font-bold text-4xl'>Services</h1>
        <div className='grid grid-cols-4 gap-5 sm:grid-cols-1 px-10'>
            {servicesData.map((item, index)=>(
                <div key={index} className=' flex flex-col items-center px-3 text-left py-5  gap-2 shadow-lg rounded'>
                    <h1 className='text-xl font-semibold text-left'>{item.title}</h1>
                    <p className='text-sm'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default services