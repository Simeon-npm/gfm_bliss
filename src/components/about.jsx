import React from "react";
import image from "../assets/experience.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="relative flex md:flex-col py-14 p-8 md:p-10 sm:text-center justify-between items-center w-full gap-y-4"
    >
      <motion.div
        className="w-[700px] sm:w-full pb-14 md:pb-0 sm:px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-yellow-500 text-lg relative inline-block"
          initial={{ opacity: 0, letterSpacing: "-0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Us
          <motion.span
            className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-yellow-500"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        </motion.h1>
        <h1 className="font-bold text-3xl mt-2">
          Powering Success: Leadership That Sparks Innovation
        </h1>
        <p className="text-neutral-500 mt-3">
          <span className="font-bold text-black">John Williams</span>, the CEO
          of our company, brings over 20 years of experience in the electrical
          industry. A licensed master electrician, John is passionate about
          delivering top-quality service and safety to every project. Under his
          leadership, the company has grown to become a trusted name in both
          residential and commercial electrical solutions. John's commitment to
          innovation, customer satisfaction, and fostering a skilled team of
          professionals drives the company's success and reputation for
          excellence.
        </p>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="lg:w-full w-1/2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers on scroll
      >
        <img
          src={image}
          alt="Experience"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default About;
