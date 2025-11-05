import Image from "next/image"
import Prakash from '../../../public/me/ooty-landscape.jpeg';
import { Linkedin, Mail, Github, Instagram } from "lucide-react";
import { FaGraduationCap, FaSearch, FaUsers } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
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
        { year: "NOV 2022 - APR 2026", icon: FaGraduationCap, role: 'Student (Full-time)', title: "Started B.E. in Computer Science", desc: "Joined SNS College of Technology, Coimbatore - building strong foundation in programming and problem solving." },
        { year: "JUN 2023 - MAR 2024", icon: MdOutlineWork, role: 'Intern (Part-time)', title: "The Reciprocal Solutions (Paid)", desc: "Started my first internship at The Reciprocal Solutions, built responsive UIs with HTML/CSS and implemented SSR using Node.js and Express.js." },
        { year: "JUL 2023 - Present", icon: FaUsers, role: 'Member', title: "DadCode Technologies", desc: "Joined DadCode Technologies, a small dev team I co-founded with friends. Worked on real-world freelance projects using MERN and modern web stacks." },
        { year: "SEP 2024 - JUL 2025", icon: MdOutlineWork, role: 'Intern (Full-time)', title: "SNS Innovation Hub (Paid)", desc: "Joined SNS Innovation Hub as a full-time intern, worked with React, Next.js, Django, and explored AI Agents using LangGraph & LangChain." },
        // { year: "Present", icon: FaSearch, role: "AI Explorer & Job Seeker", title: "Exploring AI & Seeking Opportunities", desc: "Actively exploring AI agents through personal projects, improving my full-stack skills, and looking for full-time software engineering opportunities." }

    ]

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
            </motion.div>
        </section>
    )
}
