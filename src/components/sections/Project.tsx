import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";

export default function ProjectSection() {

    return (
        <section id="projects" className="relative min-h-screen w-full py-10 md:py-20">
            {/* The max-w-7xl and mx-auto center the content, and px-4 sm:px-6 handle horizontal padding on all screens. */}
            <div className="max-w-7xl mx-auto space-y-10 px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                    /* Header is already responsive: stacks vertically (flex-col) on mobile, horizontal (sm:flex-row) on small screens and up. */
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
                {/* The grid is responsive: 1 column on mobile, 2 columns from 'sm' breakpoint onwards, preserving the desktop view. */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
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
                            <div className="flex flex-col border-2 border-primary/10 shadow-lg rounded-xl">

                                {/* Image Container with scale animation */}
                                <motion.div
                                    className="absolute inset-0"
                                    variants={{
                                        initial: { scale: 1 },
                                        hover: { scale: 1.1 }
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />
                                </motion.div>

                                {/* Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                                    variants={{
                                        initial: { opacity: 0 },
                                        hover: { opacity: 1 }
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Project Details */}
                                <motion.div
                                    className="absolute inset-0 flex flex-col justify-between p-6 text-white"
                                    variants={{
                                        initial: { opacity: 0, scale: 1.05 },
                                        hover: { opacity: 1, scale: 1 }
                                    }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    <div className="flex items-start justify-between">
                                        {/* Title uses appropriate wrapping to prevent overflow */}
                                        <p className="text-xl font-bold bg-primary/80 px-3 py-1 rounded-lg inline-flex">{project.title}</p>

                                        {/* Visit Link */}
                                        <a href={project.link} className="flex items-center gap-2 text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                                            <p className="font-semibold text-sm">Visit</p>
                                            <FaExternalLinkAlt className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <div className="space-y-4">
                                        {/* Description is padded and sized appropriately */}
                                        <p className="bg-white/10 p-3 rounded-xl text-sm font-light">{project.desc}</p>

                                        {/* Tech Stack List: flex-wrap is key for mobile responsiveness here. */}
                                        <ul className="flex items-center flex-wrap bg-white text-gray-900 px-4 py-2 rounded-full gap-4 shadow-lg">
                                            <li className="font-semibold text-sm mr-1">Built using: </li>
                                            {project.techs.map(({ icon: Icon, style, toolTip }, idx) => (
                                                <li key={idx}>
                                                    <Icon className={`${style} h-6 w-6`} title={toolTip} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    )
}
