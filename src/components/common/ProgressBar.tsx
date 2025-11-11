'use client';
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProgressBar() {

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

    return (
        <motion.div className="w-[100vw] h-[5px] md:h-[4px] bg-primary fixed top-0 z-1" style={{ x }}>
        </motion.div>
    )
}