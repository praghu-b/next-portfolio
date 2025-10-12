'use client';
import Image from "next/image";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [0, 1])

  return (
    <div className="relative min-h-screen">
      <motion.div className="sticky top-0">
        <HeroSection />
      </motion.div>
      <motion.div className="sticky top-0" style={{ opacity }}>
        <AboutSection />
      </motion.div>
    </div>
  );
}
