"use client";
import { motion } from "framer-motion";
import { MdOutlineMenu, MdWork } from "react-icons/md";
import { TiTimes } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScroll = useRef(0);

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
                        {menuOpen ? <TiTimes size={28} /> : <MdOutlineMenu size={28} />}
                    </button>
                    <span className="hidden md:block text-4xl"><span className="text-5xl font-bold font-bebas">P</span>rakash</span>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-center font-semibold text-black">
                    <NavLinks />
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

            {menuOpen && <MobileMenu handleMenu={setMenuOpen} />}
        </div>
    );
}
