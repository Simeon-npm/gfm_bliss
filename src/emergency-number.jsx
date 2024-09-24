import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { phoneNumber } from './constants';

const emergency = () => {
  return (
    <div>
        <div className='flex justify-center py-4 items-center sm:text-sm'>
            <FaPhoneAlt className='text-subordinate' />
            <p className='font-semibold ml-3'>Give us an emergency call {phoneNumber}</p>
        </div>
    </div>
  )
}

export default emergency