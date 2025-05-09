import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
const Projects = () => {
    return (
        <section className="w-full py-16 bg-gray-900 text-white flex flex-col items-center">
            <motion.h2
                className="text-4xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Our Recent Projects
            </motion.h2>
            <motion.p
                className="text-neutral-400 mb-10 text-center max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                Explore our latest electrical projects showcasing innovation and
                expertise in power solutions.
            </motion.p>

            <div className="overflow-hidden w-full max-w-5xl relative">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: [0, -projects.length * 300] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 60,
                        ease: "linear",
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative min-w-[300px] h-[200px] bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={project.src}
                                alt={project.alt}
                                className="w-full h-full object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-sm px-3 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            >
                                {project.alt}
                            </motion.div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
