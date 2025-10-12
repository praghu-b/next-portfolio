'use client';
import Image from "next/image";
import HeroSection from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
}
