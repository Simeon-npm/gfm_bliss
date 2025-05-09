import React from "react";
import { servicesData } from "../constants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      className="flex flex-col py-20 gap-5"
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center">
        <motion.h1
          className="text-yellow-500 text-lg relative inline-block"
          initial={{ opacity: 0, letterSpacing: "-0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Services
          <motion.span
            className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-yellow-500"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </motion.h1>
      </div>

      <motion.h1
        className="font-bold text-4xl text-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        The Best Service For You.
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-10 px-10 sm:px-3 mt-10">
        {servicesData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center gap-2 shadow-2xl h-80 w-72 bg-white group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}

          >
            <div className="absolute -top-8 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="h-24 w-24 object-cover border-8 border-white shadow-md z-10"
              />
            </div>

            <div className="relative flex flex-col items-center overflow-hidden w-full h-full">
              <motion.h1
                className="absolute w-full px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-center transition-transform duration-500 ease-in-out group-hover:-translate-y-64 whitespace-pre-wrap"
              >
                <span className="block w-10 h-px bg-gray-400 mb-1 mx-auto"></span>
                {item.title}
                <span className="block w-10 h-px bg-gray-400 mt-1 mx-auto"></span>
              </motion.h1>

              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center bg-yellow-500 bg-opacity-60 
                transform translate-y-full transition-all duration-500 ease-in-out 
                group-hover:translate-y-0 group-hover:clip-path-slant"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <p className="text-sm text-white relative px-5 text-center font-semibold">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
