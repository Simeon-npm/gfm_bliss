import React from 'react'
import { servicesData } from '../constants'

const services = () => {
  return (
    <div>
        <div className='grid grid-cols-4 sm:grid-cols-1'>
            {servicesData.map((item, index)=>(
                <div className=' flex flex-col items-center px-10 text-center py-5 border'>
                    <h1 className='text-xl font-semibold'>{item.title}</h1>
                    <p className='text-sm'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default services