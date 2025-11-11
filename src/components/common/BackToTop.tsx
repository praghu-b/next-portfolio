'use client';
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, x: 50, scale: 1 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.2 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="fixed bottom-20 right-5 md:right-10 z-100 p-3 bg-primary border border-white text-white shadow-lg rounded-full cursor-pointer"
                >
                    <FaArrowUp className="w-8 h-8" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}