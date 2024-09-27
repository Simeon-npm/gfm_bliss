import React from 'react'


const freeQuote = () => {
  return (
    <div className={`w-full h-[100vh] free-quote flex justify-center items-center text-white px-3`}>
        <div className='max-w-[700px] flex flex-col items-center text-center gap-3'>
            <h1 className='font-bold text-3xl'>
              Do you need professional electrical services <br /> Get a Free Quote
            </h1>
            <p className='w-[75%] text-neutral-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt cupiditate nobis quis dolore in. Ipsam provident cum voluptate voluptatem minus alias impedit, odit, autem est laborum adipisci nesciunt voluptatum aliquam.</p>
            <button className='bg-subordinate text-black px-4 py-2 rounded font-bold'>LET'S START NOW</button>
        </div>
      
    </div>
  )
}

export default freeQuote