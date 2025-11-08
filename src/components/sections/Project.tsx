import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Prakash from "../../../public/me/ooty-landscape.jpeg"
import { Button } from "../common/Button";
import { SiNextdotjs, SiExpress, SiTailwindcss, SiLangchain, SiBootstrap, SiFirebase, SiMongodb, SiNodedotjs, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { style } from "framer-motion/client";
import { VscActivateBreakpoints } from "react-icons/vsc";

export default function ProjectSection() {
    const projects = [
        {
            desc: "AI-powered platform that helps founders to boost the process of validating ideas to building MVPs faster.",
            techs: [
                { icon: SiNextdotjs, style: 'text-black', toolTip: 'Next.js' },
                { icon: SiNodedotjs, style: 'text-green-500', toolTip: 'Node.js' },
                { icon: SiExpress, style: 'text-black', toolTip: 'Express.js' },
                { icon: SiTailwindcss, style: 'text-cyan-600', toolTip: 'Tailwind CSS' },
                { icon: SiLangchain, style: 'text-green-600', toolTip: 'LangGraph & LangChain' },
                { icon: SiMongodb, style: 'text-green-600', toolTip: 'MongoDB' },
            ],
            image: '/projects/startzyai.png',
            link: 'https://startzyai.com',
            title: "StartzyAI - Business Accelerator"
        },
        {
            desc: "SSR-based cab booking platform built for a Bangalore travel service, offering fast and SEO-friendly ride management.",
            techs: [
                { icon: SiNodedotjs, style: 'text-green-500', toolTip: 'Node.js' },
                { icon: SiExpress, style: 'text-black', toolTip: 'Express.js' },
                { icon: SiBootstrap, style: 'text-purple-600', toolTip: 'Bootstrap' },
                { icon: SiFirebase, style: 'text-orange-500', toolTip: 'Firebase' }],
            image: '/projects/ksmtravels.png',
            link: 'https://ksmtravels.in',
            title: "KSM Travels - Cab Service"
        },
        {
            desc: "A full-stack tours and travel booking platform serving customers all across India.",
            techs: [
                { icon: SiNodedotjs, style: 'text-green-500', toolTip: 'Node.js' },
                { icon: SiReact, style: 'text-cyan-500', toolTip: 'React.js' },
                { icon: SiExpress, style: 'text-black', toolTip: 'Express.js' },
                { icon: SiBootstrap, style: 'text-purple-600', toolTip: 'Bootstrap' },
                { icon: SiMongodb, style: 'text-green-500', toolTip: 'MongoDB' }],
            image: '/projects/vaishnavitravels.png',
            link: 'https://vaishnavitoursandtravels.in',
            title: "Vaishnavi Tours & Travels"
        },
        {
            desc: "Server-side rendered personal portfolio with contact form, built using bootstrap, express.js and node.js during my first internship.",
            techs: [
                { icon: SiHtml5, style: 'text-orange-600', toolTip: 'HTML' },
                { icon: SiCss3, style: 'text-blue-500', toolTip: 'CSS' },
                { icon: SiJavascript, style: 'text-yellow-500', toolTip: 'JavaScript' },
                { icon: SiBootstrap, style: 'text-purple-600', toolTip: 'Bootstrap' },
                { icon: SiNodedotjs, style: 'text-green-500', toolTip: 'Node.js' },
                { icon: SiExpress, style: 'text-black', toolTip: 'Express.js' },
            ],
            image: '/projects/firstportfolio.png',
            link: 'https://praghu-b.onrender.com',
            title: "My First Portfolio"
        },
    ]

    return (
        <section className="relative min-h-screen w-full bg-muted">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="relative h-80 border-1 border-primary/20 overflow-hidden"
                            initial="initial"
                            whileHover="hover"
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
