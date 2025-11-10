import Image from "next/image"
import { motion } from "framer-motion";
import Timeline from "../ui/Timeline";

export default function About() {
    return (
        <section id="about" className="w-full min-h-screen flex items-center justify-center px-5 py-10 md:py-20">
            <motion.div className="max-w-7xl w-full">
                {/* Heading */}
                <motion.div
                    className="space-y-4 mb-10 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-3xl md:text-4xl font-playfair font-extrabold">About Me</p>
                    <motion.p
                        className="md:text-lg text-accent font-semibold"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        #OpenToWork
                    </motion.p>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {/* Image */}
                    <div className="relative w-full md:w-[40%] h-[250px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src='/Me/ooty-landscape.jpeg'
                            alt="Image of Prakash"
                            fill
                            className="object-cover object-[50%_10%] scale-110"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-base md:text-lg tracking-wide leading-relaxed space-y-5 md:space-y-8 text-accent text-center md:text-left">
                        <p>
                            <span className="font-semibold">I'm Prakash,</span> a final-year CSE student at SNSCT, Coimbatore. I’ve spent over <span className="font-semibold">20 months</span> building real-world, full-stack projects through <span className="font-semibold">two paid internships</span>.
                        </p>
                        <p>
                            I love creating practical web solutions with <span className="font-semibold">MERN, Next.js, and Django</span>, and lately, I’ve been diving into <span className="font-semibold">Agentic AI (LangGraph)</span> and <span className="font-semibold">Data Engineering</span>.
                        </p>
                        <p>
                            I’m currently looking for a <span className="font-semibold">full-time Software Engineer</span> or <span className="font-semibold">internship-to-placement</span> role. When I’m not coding, you’ll find me exploring new ideas and tech rabbit holes.
                        </p>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="mt-14 md:mt-20">
                    <Timeline />
                </div>
            </motion.div>
        </section>

    )
}
