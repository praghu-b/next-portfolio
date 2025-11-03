import Image from "next/image"
import Prakash from '../../../public/me/ooty-landscape.jpeg';
import { Linkedin, Mail, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
    const socialLinks = [
        { label: "LinkedIn", icon: Linkedin, link: 'https://linkedin.com/in/prakash-balamurugan' },
        { label: "Email", icon: Mail, link: 'mailto:prakashbalan555@gmail.com' },
        { label: "GitHub", icon: Github, link: 'https://github.com/praghu-b' },
        { label: "Instagram", icon: Instagram, link: 'https://instagram.com/praghu._b' }
    ]
    const journey = [
        { year: "Nov 2022 - April 2026", title: "Started B.E. in Computer Science", desc: "Built a strong foundation in algorithms, problem-solving, and web technologies." },
        { year: "Jan 2022 - Apr 2022", title: "First Full-Stack Project", desc: "Developed and deployed my first full-stack web app using MERN stack." },
        { year: "Jan 2023 - Apr 2022", title: "Internship – The Reciprocal Solutions", desc: "Worked on client projects, handled APIs, and improved real-world dev workflow understanding." },
        { year: "Jan 2024 - Apr 2022", title: "Built StartzyAI", desc: "Created an AI startup platform integrating Next.js, Express, and LangChain." },
        { year: "Jan 2025 - Apr 2022", title: "Focusing on Agentic AI", desc: "Building intelligent automation tools and productivity systems." }
    ]

    return (
        <section className="w-full min-h-screen flex items-center justify-center mt-20">
            <div className="max-w-7xl">
                <div className="space-y-4 mb-10 text-center">
                    <p className="text-4xl font-bold">About Me</p>
                    <p className=" text-lg text-accent font-semibold">#OpenToWork</p>
                </div>
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
                            <p className="text-accent">Hey, I’m Prakash — a final-year CSE student at SNSCT, Coimbatore. I’ve spent the last 20 months building real-world, full-stack projects through a paid internship.</p>
                            <p className="text-accent"> I love creating practical web solutions with <span className="font-semibold">MERN, Next.js, and Django</span>, and lately, I’ve been diving into <span className="font-semibold">Agentic AI (LangGraph)</span> and <span className="font-semibold">Data Engineering</span>.</p>
                            <p className="text-accent"> I’m currently looking for a <span className="font-semibold">full-time Software Engineer</span> or <span className="font-semibold">internship-to-placement</span> role. When I’m not coding, you’ll find me exploring new ideas and tech rabbit holes.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center my-15 space-y-4">
                    <h1 className="text-2xl font-bold">My Journey So Far</h1>
                    <h3 className="text-accent">A quick look at how I’ve grown as a developer</h3>
                </div>
                <div className="relative w-full h-[75vh] overflow-y-auto py-12 scrollbar-hide timeline-scroll">
                    <div className="flex flex-col gap-20 relative">
                        <motion.div
                            className="absolute left-1/2 min-h-full w-[2px] bg-gray-300 -translate-x-1/2"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1 }}
                        />
                        {journey.map((timeline, index) => (
                            <motion.div
                                key={index}
                                className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"} relative`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <motion.div
                                    className={`w-1/3 ${index % 2 === 0 ? "mr-25 p-5" : "ml-25 p-5"} text-${index % 2 === 0 ? "left" : "right"} bg-muted rounded-3xl shadow-lg space-y-2`}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <h3 className="text-xl font-semibold">{timeline.title}</h3>
                                    <p className="text-xs font-semibold py-1 px-2 bg-primary text-white inline-flex rounded-full">{timeline.year}</p>
                                    <p className="text-gray-500">{timeline.desc}</p>
                                </motion.div>

                                <motion.div
                                    className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ type: 'spring', stiffness: 150, damping: 8 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
