import { motion } from "framer-motion";
import { journey } from "@/data/about";
import { FaSearch } from "react-icons/fa";

export default function Timeline() {
    return (
        <div>
            <div className="text-center my-15 space-y-4">
                <h1 className="text-2xl font-bold">My Journey So Far</h1>
                <h3 className="text-accent">A quick look at how I’ve grown as a developer</h3>
            </div>
            <div className="relative w-full py-12 scrollbar-hide timeline-scroll">
                <div className="flex flex-col gap-20 relative">
                    <motion.div
                        className="absolute left-1/2 min-h-full w-[2px] bg-gray-300 -translate-x-1/2"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1 }}
                    />
                    {journey.map(({ title, role, desc, year, icon: Icon }, index) => (
                        <motion.div
                            key={index}
                            className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} relative`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className={`w-1/3 ${index % 2 === 0 ? "ml-25 p-5" : "mr-25 p-5"} text-${index % 2 === 0 ? "left" : "right"} bg-muted border-2 border-gray-200 rounded-3xl shadow-lg space-y-3`}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <div className="flex items-center gap-3">
                                    <p className="text-xs font-semibold py-1 px-2 bg-primary text-white inline-flex rounded-full">{year}</p>
                                    {role && <p className="text-xs font-semibold py-1 px-2 bg-white border-2 border-gray-200 inline-flex rounded-full">{role}</p>}
                                </div>
                                <p className="text-gray-500">{desc}</p>
                            </motion.div>
                            <motion.div
                                className="absolute left-1/2 top-1/2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ type: 'spring', stiffness: 150, damping: 8 }}
                            >
                                <Icon className="h-7 w-7 m-3 text-white" />
                            </motion.div>
                        </motion.div>
                    ))}
                    <motion.div
                        className={`flex justify-center relative`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className={`w-1/3 p-5 text-center bg-gradient-to-r from-black to-primary border-2 rounded-3xl shadow-lg space-y-3`}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <motion.div
                                className="bg-muted rounded-full shadow-lg inline-flex"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ type: 'spring', stiffness: 150, damping: 8 }}
                            >
                                <FaSearch className="h-7 w-7 m-3" />
                            </motion.div>
                            <h3 className="text-xl font-semibold text-muted">Seeking Opportunities & Exploring AI</h3>
                            <p className="text-accent">Actively exploring AI agents through personal projects, improving my full-stack skills, and looking for full-time software engineering opportunities.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}