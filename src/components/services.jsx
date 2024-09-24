import React from 'react'
import { servicesData } from '../constants'

const services = () => {
  return (
    <div className='flex flex-col  py-20 gap-10'>
        <h1 className='font-bold text-4xl text-center'>Services</h1>
        <div className='grid grid-cols-4 gap-5 sm:grid-cols-1 px-10 sm:px-3'>
            {servicesData.map((item, index)=>(
                <div className=' flex flex-col  px-3 text-left py-5  gap-2 shadow-2xl rounded-lg'>
                  <img src={item.img} alt="" className='h-[200px] rounded-lg w-full object-cover'/>
                    <h1 className='text-xl font-semibold text-left'>{item.title}</h1>
                    <p className='text-sm'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default services