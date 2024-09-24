import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { phoneNumber } from '../constants';

const emergency = () => {
  return (
    <div className='bg-primary text-white flex flex-col items-center py-20 text-center px-10 gap-5'>
        <h1 className='text-3xl font-bold'>Is there emergency going on? Call us right now!</h1>
        <p className='text-neutral-200'>Call our emergency line right now</p>

        <div className='flex items-center gap-3 font-bold'>
            <FaPhoneAlt className='text-subordinate' />
            {phoneNumber}
        </div>
    </div>
  )
}

export default emergency