"use client";
import { motion } from "framer-motion";
import { Home, BookUser, FolderCode, PhoneForwarded } from "lucide-react";
import { MdWork } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const lastScroll = useRef(0);
    const navLinks = [{ label: "Home", icon: Home }, { label: "About", icon: BookUser }, { label: "Projects", icon: FolderCode }, { label: "Skills", icon: VscTools }, { label: "Contact", icon: PhoneForwarded }];

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
                className="max-w-7xl mx-auto fixed top-8 left-10 right-10 bg-white flex items-center justify-start px-6 py-3 rounded-full z-10"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: hidden ? 0 : 1, y: hidden ? -150 : 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <motion.div className="flex-1">
                    <span className="text-5xl font-bold font-climate">P</span><span className="text-4xl">rakash</span>
                </motion.div>
                <motion.div
                    className="flex-1 flex items-center justify-between rounded-full px-5 py-3 md:px-8 md:py-3 font-semibold text-black"
                >
                    <ul className="flex-1 flex items-center justify-between gap-5">
                        {navLinks.map(({ label, icon: Icon }) => (
                            <li key={label} className="">
                                <a href={`#${label.toLowerCase()}`}>
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
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div className="flex-1 flex items-center justify-end text-white text-lg font-semibold">
                    <a href="mailto:prakashbalan555@gmail.com" className="bg-primary rounded-full px-4 py-2 flex items-center gap-2">
                        Hire Me <MdWork className="w-6 h-6" />
                    </a>
                </motion.div>
            </motion.nav>
        </div>
    );
}
