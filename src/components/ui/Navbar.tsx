"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, BookUser, FolderCode, PhoneForwarded, Linkedin, Mail, Github, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const lastScroll = useRef(0);
    const navLinks = [{ label: "Home", icon: Home }, { label: "About", icon: BookUser }, { label: "Projects", icon: FolderCode }, { label: "Contact", icon: PhoneForwarded }];
    const socialLinks = [{ label: "LinkedIn", icon: Linkedin, color: 'bg-blue-700', link: 'https://linkedin.com/in/prakash-balamurugan', dur: 0.2 }, { label: "Email", icon: Mail, color: 'bg-yellow-600', link: 'mailto:prakashbalan555@gmail.com', dur: 0.4 }, { label: "GitHub", icon: Github, color: 'bg-neutral-700', link: 'https://github.com/praghu-b', dur: 0.6 }, { label: "Instagram", icon: Instagram, color: 'bg-gradient-to-tr from-yellow-600 via-pink-600 to-purple-700', link: 'https://instagram.com/praghu._b', dur: 0.8 }]

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            current > lastScroll.current ? setHidden(true) : setHidden(false);
            lastScroll.current = current;
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScroll])

    return (
        <div className="w-full">
            <motion.nav
                className="max-w-7xl mx-auto fixed top-8 left-10 right-10 flex items-center justify-start z-10"
                initial={{ y: 0 }}
                animate={{ y: hidden ? -100 : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <motion.div className="flex-1">
                    <span className="text-5xl font-bold font-climate">Pb</span>
                </motion.div>
                <motion.div
                    className="flex-1 flex items-center justify-between rounded-full px-5 py-3 md:px-8 md:py-3 font-semibold text-black"
                >
                    <ul className="flex-1 flex items-center justify-between gap-5">
                        {navLinks.map(({ label, icon: Icon }) => (
                            <li key={label} className="">
                                <Link href={`#${label.toLowerCase()}`}>
                                    <motion.div
                                        className="flex items-center gap-2"
                                    >
                                        <Icon className="h-5 w-5" />

                                        <motion.span
                                            className="overflow-hidden"
                                        >
                                            {label}
                                        </motion.span>
                                    </motion.div>
                                </Link>
                            </li>

                        ))}
                    </ul>
                </motion.div>
                <motion.div className="flex-1 flex items-center justify-end">
                    <button className="text-lg text-white bg-primary px-4 py-2 rounded-full">
                        Say Hello
                    </button>
                </motion.div>

            </motion.nav>
        </div>
    );
}
