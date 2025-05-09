import React from 'react'
import { motion } from "framer-motion";


const hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: "easeOut" } },
  };

  return (
    <div className=' hero w-full h-[90vh] md:h-[75vh] flex flex-col items-center justify-center text-white'>
      <div className='flex flex-col items-center w-[70%] sm:w-[100%] text-center gap-6'>
        <motion.h1 variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className='text-5xl sm:text-3xl font-bold'>Safe, Reliable, and Professional Electrical Services</motion.h1>
        <motion.p variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className='text-neutral-300 text-lg sm:text-sm w-[70%] sm:w-[85%]'>Licensed electricians available for installations, repairs, and emergency services. Serving your community with over 20 years of experience</motion.p>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className='space-x-5 sm:text-xs'>
          {/* <button className='px-5 py-3 bg-subordinate text-black font-semibold rounded'>Get a Free Quote</button> */}
          <a href="#services" className='no-underline'>
            <button className='border-2 border-white px-5 py-3 rounded font-semibold'>Explore Services</button>
          </a>
        </motion.div>
      </div>

    </div>
  )
}

export default hero