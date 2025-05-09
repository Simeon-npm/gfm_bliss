import React from "react";
import { qualitiesData } from "../constants";
import image from "../assets/meter.png";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Qualities = () => {
  return (
    <motion.div
      className="flex md:flex-col justify-center items-center py-20 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div>
        {qualitiesData.left.map((item, index) => (
          <motion.div
            key={index}
            className="flex md:flex-col-reverse items-center md:items-end text-right max-w-[300px] border-b last-of-type:border-0 py-3"
            variants={fadeInVariant}
          >
            <div>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-neutral-600 text-sm">{item.description}</p>
            </div>
            <motion.div
              className="bg-primary ml-4 text-white p-3 rounded-full text-2xl"
              variants={iconVariant}
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={imageVariant}>
        <img src={image} alt="Meter" className="w-[350px] md:w-[300px]" />
      </motion.div>

      <div>
        {qualitiesData.right.map((item, index) => (
          <motion.div
            key={index}
            className="flex md:flex-col md:items-start items-center text-left justify-between max-w-[300px] border-b last-of-type:border-0 py-3"
            variants={fadeInVariant}
          >
            <motion.div
              className="bg-primary mr-4 text-white p-3 rounded-full text-2xl"
              variants={iconVariant}
              whileHover={{ scale: 1.2 }}
            >
              {item.icon}
            </motion.div>
            <div>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-neutral-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Qualities;
