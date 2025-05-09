import React from 'react'


const freeQuote = () => {
  return (
<div className={`w-full h-[100vh] free-quote flex justify-center items-center text-white px-3`}>
    <div className='max-w-[700px] flex flex-col items-center text-center gap-3'>
        <h1 className='font-bold text-3xl'>
          Need Reliable Electrical Services? <br /> Get a Free Quote Today!
        </h1>
        <p className='w-[75%] text-neutral-300'>
          Whether it’s wiring, installations, or repairs, our certified electricians ensure top-notch service, 
          safety, and efficiency. Let’s power up your home or business with expert care and precision.  
        </p>
        <button className='bg-subordinate text-black px-4 py-2 rounded font-bold'>LET'S START NOW</button>
    </div>
</div>

  )
}

export default freeQuote