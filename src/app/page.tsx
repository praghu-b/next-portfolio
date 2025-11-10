'use client';
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ProjectSection from "@/components/sections/Project";
import SkillSection from "@/components/sections/Skill";
import ContactSection from "@/components/sections/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative space-y-5">
      <motion.div>
        <HeroSection />
      </motion.div>
      <motion.div>
        <AboutSection />
      </motion.div>
      <motion.div>
        <ProjectSection />
      </motion.div>
      <motion.div>
        <SkillSection />
      </motion.div>
      <motion.div>
        <ContactSection />
      </motion.div>
    </div>
  );
}
