import React from 'react'
import { qualitiesData } from '../constants'
import image from '../assets/meter.png'

const qualities = () => {
  return (
    <div className='flex md:flex-col justify-center items-center py-20'>
        <div>
          {
            qualitiesData.left.map((item, index)=>(
                <div key={index} className='flex md:flex-col-reverse items-center md:items-end text-right max-w-[300px] border-b last-of-type:border-0 py-3'>
                    <div>
                      <h3 className='font-bold text-xl'>{item.title}</h3>
                      <p className='text-neutral-600 text-sm'>{item.description}</p>
                    </div>
                    <div className='bg-primary ml-4 text-white p-3 rounded-full text-2xl'>
                        {item.icon}
                    </div>
                    

                </div>
            ))
          }
        </div>

        <div>
            <img src={image} alt="" />
        </div>

        <div>
          {
            qualitiesData.right.map((item, index)=>(
                <div key={index} className='flex md:flex-col md:items-start items-center text-left justify-between max-w-[300px] border-b last-of-type:border-0 py-3'>

                    <div className='bg-primary mr-4 text-white p-3 rounded-full text-2xl'>
                        {item.icon}
                    </div>
                    <div>
                      <h3 className='font-bold text-xl'>{item.title}</h3>
                      <p className='text-neutral-600 text-sm'>{item.description}</p>
                    </div>
                    
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default qualities