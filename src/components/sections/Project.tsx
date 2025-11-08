import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects";

export default function ProjectSection() {

    return (
        <section className="relative min-h-screen w-full">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="flex items-center justify-between">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">Things I've Built!</h1>
                        <p className="text-xl text-accent font-semibold">My Works & Contributions</p>
                    </div>
                    <motion.p
                        className="text-lg text-accent font-semibold"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        #CodeInAction
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative h-80 border-1 border-primary/20 overflow-hidden"
                            initial="initial"
                            whileHover="hover"
                            whileInView="view"
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                hover: {},
                                view: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <div className="flex flex-col border-2 border-primary/10 shadow-lg rounded-2xl">
                                <motion.div
                                    className="absolute inset-0"
                                    variants={{
                                        initial: { scale: 1 },
                                        hover: { scale: 1.1 }
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image src={project.image} alt="Prakash" fill className="object-fill" />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 bg-black/70"
                                    variants={{
                                        initial: { opacity: 0 },
                                        hover: { opacity: 1 }
                                    }}
                                    transition={{ duration: 0.5 }}
                                ></motion.div>
                                <motion.div
                                    className="absolute inset-0 flex flex-col justify-between p-6"
                                    variants={{
                                        initial: { opacity: 0, scale: 1.3 },
                                        hover: { opacity: 1, scale: 1 }
                                    }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-xl font-bold text-muted inline-flex px-2 rounded-full uppercase">{project.title}</p>
                                        <Link href={project.link} className="flex items-center gap-2" target="_blank">
                                            <p className="text-muted font-semibold">Visit</p>
                                            <FaExternalLinkAlt className="w-5 h-5 text-muted" />
                                        </Link>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-muted px-3 py-2 rounded-2xl">{project.desc}</p>
                                        <ul className="flex items-center bg-muted px-4 py-2 rounded-full inline-flex gap-5">
                                            {project.techs.map(({ icon: Icon, style, toolTip }, index) => (
                                                <li key={index}>
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
