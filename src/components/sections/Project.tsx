import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Prakash from "../../../public/me/ooty-landscape.jpeg"
import { Button } from "../common/Button";
import { SiNextdotjs, SiExpress, SiTailwindcss, SiLangchain, SiBootstrap, SiFirebase, SiMongodb, SiNodedotjs } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { style } from "framer-motion/client";

export default function ProjectSection() {
    const projects = [
        {
            desc: "AI-powered platform that helps founders validate ideas and build MVPs faster.",
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
            title: "KSM Travels - Cab"
        },
    ]

    return (
        <section className="relative min-h-screen w-full">
            <div className="max-w-7xl mx-auto space-y-24">
                <div className="flex items-center justify-between">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">Things I've Built!</h1>
                        <p className="text-xl text-accent font-semibold">My Works</p>
                    </div>
                    <motion.p
                        className="text-lg text-accent font-semibold"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        #CodeInAction
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 space-y-5">
                    {projects.map((project, index) => (
                        <div key={index} className="relative">
                            <div className="flex flex-col border-2 border-primary/10 shadow-lg rounded-2xl overflow-hidden">
                                <div className="relative h-80 bg-primary">
                                    <Image src={project.image} alt="Prakash" fill className="object-contain" />
                                </div>
                                <div className="flex-1 p-4 bg-muted space-y-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xl font-bold">{project.title}</p>
                                        <Link href={project.link}>
                                            <FaExternalLinkAlt className="w-5 h-5" target="blank" />
                                        </Link>
                                    </div>
                                    <p className="text-lg text-accent">{project.desc}</p>
                                    <ul className="flex-auto flex items-center justify-center gap-3">
                                        {project.techs.map(({ icon: Icon, style, toolTip }, index) => (
                                            <li key={index}>
                                                <Icon className={`${style} h-8 w-8`} title={toolTip} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
