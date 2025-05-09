import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { contactItems } from "../constants";
import { motion } from "framer-motion";

const Emergency = () => {
  return (
    <motion.div
      className="bg-primary text-white flex flex-col items-center py-20 text-center px-10 gap-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Is there an emergency? Call us right now!
      </motion.h1>
      <motion.p
        className="text-neutral-200"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Call our emergency line immediately
      </motion.p>
      <motion.div
        className="flex items-center gap-3 font-bold text-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaPhoneAlt className="text-subordinate text-2xl" />
        </motion.div>
        {contactItems.phoneNumber}
      </motion.div>
    </motion.div>
  );
};

export default Emergency;
