import Image from "next/image"
import Prakash from '../../../public/me/ooty-landscape.jpeg';
import { motion } from "framer-motion";
import Timeline from "../ui/Timeline";

export default function About() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center">
            <motion.div
                className="max-w-7xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="space-y-4 mb-10 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p className="text-4xl font-bold">About Me</p>
                    <motion.p
                        className="text-lg text-accent font-semibold"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        #OpenToWork
                    </motion.p>
                </motion.div>
                <div className="flex items-center justify-between">
                    <div className="flex-1 h-[300px] bg-primary relative overflow-hidden">
                        <Image
                            src={Prakash}
                            alt="Image of Prakash"
                            fill
                            className="scale-[1.5] object-cover object-[50%_10%]"
                        />
                    </div>
                    <div className="flex-2 text-lg tracking-wider leading-relaxed md:px-10 py-5 md:space-y-8">
                        <div className="space-y-4">
                            <p className="text-accent"><span className="font-semibold">I'm Prakash,</span> a final-year CSE student at SNSCT, Coimbatore. I’ve spent over <span className="font-semibold">20 months</span> building real-world, full-stack projects through <span className="font-semibold">two paid internships</span>.</p>
                            <p className="text-accent"> I love creating practical web solutions with <span className="font-semibold">MERN, Next.js, and Django</span>, and lately, I’ve been diving into <span className="font-semibold">Agentic AI (LangGraph)</span> and <span className="font-semibold">Data Engineering</span>.</p>
                            <p className="text-accent"> I’m currently looking for a <span className="font-semibold">full-time Software Engineer</span> or <span className="font-semibold">internship-to-placement</span> role. When I’m not coding, you’ll find me exploring new ideas and tech rabbit holes.</p>
                        </div>
                    </div>
                </div>
                <Timeline />
            </motion.div>
        </section>
    )
}
