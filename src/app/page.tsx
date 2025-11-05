'use client';
import Image from "next/image";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ProjectSection from "@/components/sections/Project";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div className="relative space-y-24">
      <motion.div>
        <HeroSection />
      </motion.div>
      <motion.div>
        <AboutSection />
      </motion.div>
      <motion.div>
        <ProjectSection />
      </motion.div>
    </div>
  );
}
