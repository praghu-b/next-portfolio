import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Download } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import { Button } from '../common/Button';

export default function HeroSection() {
    const socialLinks = [{ label: "LinkedIn", icon: FaLinkedin, link: 'https://linkedin.com/in/prakash-balamurugan' }, { label: "Email", icon: MdMail, link: 'mailto:prakashbalan555@gmail.com' }, { label: "GitHub", icon: FaGithub, link: 'https://github.com/praghu-b' }, { label: "Instagram", icon: FaInstagram, link: 'https://instagram.com/praghu._b' }]

    return (
        <section id='home' className="relative min-h-screen w-full flex flex-col items-center justify-center space-y-10 px-5 py-10 overflow-x-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-2 md:gap-10">
                {/* Left side (Image on desktop, bottom on mobile) */}
                <motion.div
                    className='relative flex-2 w-full flex justify-center md:order-1 order-2'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <div className='overflow-hidden rounded-full border-10 border-white shadow-2xl shadow-black/70'>
                        <Image src="/me/prakash-full.jpg" alt='Image of Prakash' className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] scale-115 object-cover object-[30%_70%]' width={400} height={400}/>
                    </div>
                    <p className='absolute top-10 md:top-4 left-0 md:left-5 font-fancy bg-primary text-white py-2 px-4 rounded-full font-semibold text-lg md:text-xl'>Hello! I'm Prakash</p>
                </motion.div>

                {/* Right side (Text on desktop, top on mobile) */}
                <motion.div
                    className='flex-3 space-y-4 text-center md:text-left md:space-y-8 md:order-2 order-1'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className='text-4xl md:text-6xl font-playfair font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent py-3 md:py-5'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Building web apps that think, automate, and perform.
                    </motion.h3>
                    <motion.h6
                        className='text-base md:text-lg text-accent md:w-4/5 mx-auto md:mx-0'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        I build scalable web apps, intelligent systems, and products that blend creativity with automation. Passionate about turning complex ideas into real-world digital experiences.
                    </motion.h6>
                    <motion.div
                        className="flex items-center justify-center md:justify-start gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Button label={"Download CV"} variant='primary' icon={Download} onClick={() => window.open("/docs/Prakash_Resume.pdf")} />
                        <Button label={"View Projects"} variant='outline' icon={Code2} href='#projects' />
                    </motion.div>
                </motion.div>
            </div>

            {/* Social links (unchanged) */}
            <motion.div
                className='absolute bottom-0 md:bottom-10'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                viewport={{ once: true }}
            >
                <ul className='bg-primary py-2 px-8 rounded-full flex items-center gap-6 md:gap-8'>
                    {socialLinks.map(({ label, link, icon: Icon }) => (
                        <motion.li key={label} whileHover="hover" initial="initial" className="flex items-center gap-2">
                            <Link href={link} className="flex items-center">
                                <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                                <motion.p
                                    variants={{
                                        hover: { opacity: 1, width: "auto", marginLeft: 8 },
                                        initial: { opacity: 0, width: 0, marginLeft: 0 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="text-white font-medium overflow-hidden"
                                >
                                    {label}
                                </motion.p>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    )
}