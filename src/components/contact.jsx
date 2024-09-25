import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { contactItems } from '../constants';

const contact = () => {
  return (
    <div className='bg-primary flex justify-center gap-8 py-20 px-10'>
        <div className='max-w-[500px] text-white space-y-3'>
            <h1 className='font-bold text-3xl'>Contact us today! Let's work together</h1>
            <p className=' text-neutral-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque dolorum rerum, doloribus repudiandae quae sed eos tenetur aliquid iusto, culpa consequuntur ipsam temporibus in repellat obcaecati assumenda recusandae consectetur.</p>
            <div className='flex items-center gap-4'>
                <FaPhoneAlt className='text-subordinate text-3xl'/>
                <div>
                <h3 className='text-neutral-300'>CALL US</h3>
                <h1 className='text-xl font-semibold'>{contactItems.phoneNumber}</h1>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <IoMailOutline className='text-subordinate text-3xl'/>
                <div>
                <h3 className='text-neutral-300'>SEND AN EMAIL</h3>
                <h1 className='text-xl font-semibold'>{contactItems.email}</h1>
                </div>
            </div>
            
        </div>


        <div className=' min-w-[450px] space-y-3'>
          <h1 className='font-bold text-white text-2xl'>Or send us a message</h1>
          <form action="get" className='flex flex-col '>
            <div className='grid grid-cols-2 gap-3'>
                <input className='h-10 px-3 focus:outline-none rounded' type="text" name='name' placeholder='Your name' />
                <input className='h-10 px-3 focus:outline-none rounded' type="email" name='email' placeholder='Email'  />
                <textarea className=' col-span-2 p-3 rounded focus:outline-none' name="message" id="" placeholder='Your Message' rows={6}></textarea>
            </div>
            
            
            <button className='bg-subordinate mt-3 rounded py-2 font-bold'>SEND YOUR MESSAGE</button>
          </form>
        </div>

    </div>
  )
}

export default contact