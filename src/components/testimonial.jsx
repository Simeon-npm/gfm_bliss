import React from "react";
import { motion } from "framer-motion";
import { testimonialData } from "../constants";
import { ImQuotesLeft } from "react-icons/im";

const testimonial = () => {
    return (
        <div className="py-14 bg-neutral-100 flex flex-col items-center">
            <div className="flex items-center justify-center">
                <motion.h1
                    className="text-yellow-500 text-lg relative inline-block"
                    initial={{ opacity: 0, letterSpacing: "-0.1em" }}
                    whileInView={{ opacity: 1, letterSpacing: "0em" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Testimonials
                    <motion.span
                        className="absolute left-0 bottom-0 h-0.5 bg-yellow-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    />
                </motion.h1>
            </div>

            <motion.h1
                className="font-bold text-4xl mb-10 text-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Our Satisfied Clients
            </motion.h1>

            <motion.div
                className="flex md:flex-col gap-8 px-10 md:px-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
                    hidden: { opacity: 0 },
                }}
            >
                {testimonialData.map((item, index) => (
                    <motion.div
                        key={index}
            className="max-w-[320px] bg-white flex flex-col p-6 rounded shadow-lg"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
            whileHover={{ scale: 1.05 }}
                    >
                        <ImQuotesLeft className="text-4xl mb-4 text-yellow-500" />
                        <p className="text-neutral-500">{item.description}</p>

                        <div className="mt-3">
                            <h3 className="font-bold text-xl">{item.name}</h3>
              <h4 className="font-semibold text-subordinate">{item.service}</h4>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default testimonial;
