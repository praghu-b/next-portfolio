import Image from "next/image"
import Prakash from '../../../public/me/prakash-full.jpg';
import { Linkedin, Mail, Github, Instagram } from "lucide-react";
import Link from "next/link";

export default function About() {
    const socialLinks = [{ label: "LinkedIn", icon: Linkedin, link: 'https://linkedin.com/in/prakash-balamurugan' }, { label: "Email", icon: Mail, link: 'mailto:prakashbalan555@gmail.com' }, { label: "GitHub", icon: Github, link: 'https://github.com/praghu-b' }, { label: "Instagram", icon: Instagram, link: 'https://instagram.com/praghu._b' }]

    return (
        <section className="w-full min-h-screen flex items-center justify-center">
            <div className="max-w-7xl flex items-center justify-between">
                <div className="flex-2 h-[600px] bg-primary relative overflow-hidden">
                    <Image
                        src={Prakash}
                        alt="Image of Prakash"
                        fill
                        className="object-cover object-[20%_80%]" // change position here
                    />
                </div>
                <div className="flex-3 text-lg tracking-wider leading-relaxed md:px-10 py-5 md:space-y-8">
                    <p className="text-5xl font-bold md:mb-10">About Me</p>
                    <p>I'm a final-year Computer Science student at SNS College of Technology, Coimbatore. Graduating with <span className="font-semibold">20 months of paid internship experience</span>. I build practical, full-stack solutions and am now expanding into data-driven and AI-powered systems. </p>
                    <ul className="list-disc list-inside">
                        <li><span className="font-bold">Expertise:</span> MERN Stack, Next.js, Django</li>
                        <li><span className="font-bold">Exploring:</span> Agentic AI (LangGraph) & Data Engineering</li>
                        <li><span className="font-bold">Currently:</span> Seeking a full-time Software Engineer role or Internship cum placement opportunity.</li>
                    </ul>
                    <p>When I'm not coding, I'm naturally curious and enjoy doing 'deep dives' on new topics I discover.</p>
                    <div className="">
                        <ul className="flex items-center mt-10 space-x-5">
                            {socialLinks.map(({ label, link, icon: Icon }) => (
                                <li key={label}>
                                    <Link href={link}>
                                        <Icon className="h-8 w-8" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
