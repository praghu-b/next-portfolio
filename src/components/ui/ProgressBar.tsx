'use client';
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProgressBar() {

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

    return (
        <motion.div className="w-[100vw] h-[2px] bg-purple-500 shadow-[0_0_15px_3px_rgba(173,70,255,0.7)] fixed top-0 z-1" style={{ x }}>
            <span className="h-[6px] w-[6px] -top-1/2 bg-purple-500 shadow-[0_0_15px_3px_rgba(173,70,255,0.7)] rounded-full absolute bottom right-0"></span>
        </motion.div>
    )
}