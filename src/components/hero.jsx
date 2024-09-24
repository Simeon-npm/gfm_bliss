import React from 'react'


const hero = () => {
  return (
    <div className=' hero w-full h-[90vh] md:h-[75vh] flex flex-col items-center justify-center text-white'>
      <div className='flex flex-col items-center w-[70%] sm:w-[100%] text-center gap-6'>
        <h1 className='text-5xl sm:text-3xl font-bold'>Safe, Reliable, and Professional Electrical Services</h1>
        <p className='text-neutral-300 text-lg sm:text-sm w-[70%] sm:w-[85%]'>Licensed electricians available for installations, repairs, and emergency services. Serving your community with over 20 years of experience</p>
        <div className='space-x-5 sm:text-xs'>
          {/* <button className='px-5 py-3 bg-subordinate text-black font-semibold rounded'>Get a Free Quote</button> */}
          <a href="#services" className='no-underline'>
            <button className='border-2 border-white px-5 py-3 rounded font-semibold'>Explore Services</button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default hero