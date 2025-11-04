import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Prakash from '../../../public/Me/prakash-full.jpg';
import { Code2, Download } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from 'react-icons/md';
import { Button } from '../common/Button';

export default function HeroSection() {
    const socialLinks = [{ label: "LinkedIn", icon: FaLinkedin, link: 'https://linkedin.com/in/prakash-balamurugan' }, { label: "Email", icon: MdMail, link: 'mailto:prakashbalan555@gmail.com' }, { label: "GitHub", icon: FaGithub, link: 'https://github.com/praghu-b' }, { label: "Instagram", icon: FaInstagram, link: 'https://instagram.com/praghu._b' }]

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center space-y-10">
            <div className="max-w-7xl mx-auto flex items-center">
                <motion.div
                    className='relative flex-2 w-full flex justify-center'
                    initial={{ y: "50vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className='overflow-hidden rounded-full border-10 border-white shadow-2xl shadow-black/70'>
                        <Image src={Prakash} alt='Image of Prakash' className='w-[400px] h-[400px] scale-115 object-cover object-[30%_70%]' />
                    </div>
                    <p className='absolute top-15 left-5 bg-primary text-white py-2 px-4 rounded-full font-semibold text-xl'>Hello! I'm Prakash</p>
                </motion.div>
                <motion.div
                    className='flex-3 space-y-8'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <motion.h3
                        className='text-6xl font-bold md:w-7/8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Building web apps that think, automate, and perform.
                    </motion.h3>
                    <motion.h6
                        className='text-lg text-accent md:w-4/5'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        I build scalable web apps, intelligent systems, and products that blend creativity with automation. Passionate about turning complex ideas into real-world digital experiences.
                    </motion.h6>
                    <motion.div
                        className="flex items-center space-x-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Button label={"Download CV"} variant='primary' icon={Download} onClick={() => window.open("/docs/Prakash_Resume.pdf")} />
                        <Button label={"View Projects"} variant='outline' icon={Code2} href='#projects' />
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                className='absolute bottom-10'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
            >
                <ul className='bg-primary py-2 px-8 rounded-full flex items-center gap-8'>
                    {socialLinks.map(({ label, link, icon: Icon }) => (
                        <motion.li
                            key={label}
                            whileHover="hover"
                            initial="initial"
                            variants={{
                                hover: {},
                                initial: {}
                            }}
                            className="flex items-center gap-2"
                        >
                            <Link href={link} className="flex items-center">
                                <Icon className="w-8 h-8 text-white" />
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
        </section >
    )
}