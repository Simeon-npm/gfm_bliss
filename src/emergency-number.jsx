import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { contactItems } from './constants';

const emergency = () => {
  return (
    <div>
        <div className='flex justify-center py-4 items-center'>
            <FaPhoneAlt className='text-subordinate' />
            <p className='font-semibold ml-3'>Give us an emergency call {contactItems.phoneNumber}</p>
        </div>
    </div>
  )
}

export default emergency