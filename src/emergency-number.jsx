import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { contactItems } from './constants';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const emergency = () => {
  const text = `${contactItems.phoneNumber}`;
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    setDisplayedText(text.charAt(0));
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='flex justify-center py-4 items-center sm:text-sm'>
        <FaPhoneAlt className='text-subordinate' />
        <p className='font-semibold ml-3'>Give us an emergency call {" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
          </motion.span>
        </p>
      </div>
    </div>
  )
}

export default emergency