import React from 'react'
import { testimonialData } from '../constants'
import { ImQuotesLeft } from "react-icons/im";

const testimonial = () => {
  return (
    <div className='py-14 bg-neutral-100 flex flex-col items-center'>
        <h1 className='font-bold text-4xl mb-10'>Our Satisfied Clients</h1>

        <div className='flex md:flex-col gap-8 px-10 md:px-5'>
            {
                testimonialData.map((item, index)=>(
                    <div key={index} className='max-w-[320px] bg-white flex flex-col p-6 rounded shadow-lg'>
                        <ImQuotesLeft className='text-4xl mb-4' />
                        <p className='text-neutral-500'>{item.description}</p>

                        <div className=' mt-3'>
                            <h3 className='font-bold text-xl'>{item.name}</h3>
                            <h4 className='font-semibold text-subordinate'>{item.service}</h4>
                        </div>
                        

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default testimonial