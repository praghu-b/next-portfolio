"use client";
import { motion } from "framer-motion";
import { Home, BookUser, FolderCode, PhoneForwarded, Menu, X } from "lucide-react";
import { MdWork } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScroll = useRef(0);
    const navLinks = [
        { label: "Home", icon: Home },
        { label: "About", icon: BookUser },
        { label: "Projects", icon: FolderCode },
        { label: "Skills", icon: VscTools },
        { label: "Contact", icon: PhoneForwarded },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            current > lastScroll.current ? setHidden(true) : setHidden(false);
            lastScroll.current = current;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full">
            <motion.nav
                className="md:max-w-7xl mx-auto fixed md:top-8 left-0 md:left-10 right-0 md:right-10 md:bg-white flex items-center justify-between px-6 py-3 rounded-full z-10"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: hidden ? 0 : 1, y: hidden ? -150 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden bg-primary p-2 rounded-full text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <span className="hidden md:block text-5xl font-bold font-climate">P</span>
                    <span className="hidden md:block text-4xl">rakash</span>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-center font-semibold text-black">
                    <ul className="flex items-center justify-between gap-8">
                        {navLinks.map(({ label, icon: Icon }) => (
                            <li key={label}>
                                <a href={`#${label.toLowerCase()}`}>
                                    <motion.div
                                        className="flex items-center gap-2"
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span>{label}</span>
                                    </motion.div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-end">
                    <a
                        href="mailto:prakashbalan555@gmail.com"
                        className="bg-primary rounded-full px-4 py-2 flex items-center gap-2 text-white md:text-lg font-semibold"
                    >
                        Hire Me <MdWork className="w-6 h-6" />
                    </a>
                </div>
            </motion.nav>

            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-15 left-5 right-5 bg-white shadow-md rounded-2xl p-5 z-10 md:hidden"
                >
                    <ul className="flex flex-col gap-5 font-semibold text-black">
                        {navLinks.map(({ label, icon: Icon }) => (
                            <li key={label}>
                                <a
                                    href={`#${label.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-center gap-3"
                                >
                                    <Icon className="h-5 w-5" />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
}
