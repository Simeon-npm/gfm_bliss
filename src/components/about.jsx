import React from 'react'
import image from '../assets/ceo.png'

const about = () => {
  return (
    <div id='about' className='relative flex md:flex-col pt-14 sm:px-10 px-20 sm:text-center justify-between items-center'>
        <div className='w-[700px] sm:w-[300px] pb-14 md:pb-0'>
            <h1 className='font-bold text-3xl'>Powering Success: Leadership That Sparks Innovation</h1>
            <p className='text-neutral-500 mt-3'><span className='font-bold text-black'>John Williams</span>, the CEO of our company, brings over 20 years of experience in the electrical industry. A licensed master electrician, John is passionate about delivering top-quality service and safety to every project. Under his leadership, the company has grown to become a trusted name in both residential and commercial electrical solutions. John’s commitment to innovation, customer satisfaction, and fostering a skilled team of professionals drives the company’s success and reputation for excellence.</p>
           
        </div>

        <img className='' src={image} alt="" />

    </div>
  )
}

export default about