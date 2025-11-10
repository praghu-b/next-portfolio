import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";
import { useState } from "react";

export default function ProjectSection() {
    return (
        <section id="projects" className="relative min-h-screen w-full py-10 md:py-20">
            <div className="max-w-7xl mx-auto space-y-10 px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left"
                >
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-playfair font-extrabold">Projects Built</h1>
                        <p className="text-accent">Explore my works & contributions</p>
                    </div>
                    <motion.p
                        className="text-base md:text-lg text-accent font-semibold mt-4 sm:mt-0"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        #CodeInAction
                    </motion.p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const [isActive, setIsActive] = useState(false);

                        return (
                            <motion.div
                                key={index}
                                onClick={() => setIsActive(!isActive)}
                                className="relative h-45 md:h-80 border-1 border-primary/20 overflow-hidden rounded-xl shadow-xl shadow-primary/30 group cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                                whileInView="view"
                                variants={{
                                    initial: { opacity: 0, y: 20 },
                                    hover: {},
                                    view: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            >
                                {/* Image Container */}
                                <motion.div
                                    className="absolute inset-0"
                                    variants={{
                                        initial: { scale: 1 },
                                        hover: { scale: 1.1 }
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover absolute inset-0"
                                        fill
                                    />
                                </motion.div>

                                {/* Overlay */}
                                <motion.div
                                    className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-500 ${isActive
                                        ? "opacity-100"
                                        : "opacity-0 sm:opacity-0 sm:group-hover:opacity-100"
                                        }`}
                                />

                                {/* Project Details */}
                                <motion.div
                                    className={`absolute inset-0 flex flex-col justify-between p-2 md:p-6 text-white transition-all duration-500 ${isActive
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 sm:opacity-0 sm:group-hover:opacity-100 sm:scale-100 scale-105"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm md:text-xl font-bold bg-primary/80 px-3 py-1 rounded-lg inline-flex">
                                            {project.title}
                                        </p>

                                        <a
                                            href={project.link}
                                            className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()} // prevent toggle on click
                                        >
                                            <p className="font-semibold text-xs md:text-sm">Visit</p>
                                            <FaExternalLinkAlt className="w-4 h-4 md:w-5 md:h-5" />
                                        </a>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="bg-white/10 p-3 rounded-xl text-xs md:text-sm font-light">
                                            {project.desc}
                                        </p>

                                        <ul className="flex items-center inline-flex bg-white text-gray-900 px-4 py-2 rounded-full gap-3 md:gap-4 shadow-lg">
                                            <li className="font-semibold text-sm mr-1">Built using:</li>
                                            {project.techs.map(({ icon: Icon, style, toolTip }, idx) => (
                                                <li key={idx}>
                                                    <Icon className={`${style} h-6 w-6`} title={toolTip} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
