import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Prakash from '../../../public/Me/prakash.png';
import { Code, GraduationCap, HeartHandshake } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-purple-300 to-white">
            <div className='absolute w-full md:max-w-7xl flex flex-col items-center justify-between md:px-10 space-y-20 md:mt-50'>
                <div className='w-full flex font-fancy items-center justify-center text-center'>
                    <motion.div
                        className="flex-1 text-8xl"
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    >
                        Hello,
                    </motion.div>
                    <motion.div
                        className="flex-1 text-8xl"
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    >
                        there!
                    </motion.div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <motion.div
                        className='bg-white flex items-center gap-5 px-4 py-2 rounded-full font-semibold'
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0px_5px_5px_rgba(255,105,0,0.5)]"></div>
                        <span className='text-sm'>Available To Collaborate</span>
                    </motion.div>
                    <motion.div
                        className='backdrop-blur-lg bg-white/20 border border-white rounded-2xl px-4 py-2 shadow'
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className='font-semibold'>Specialized in Full-stack <br />Development and API <br />Integration</h1>
                    </motion.div>
                </div>
                <div className="relative w-full flex items-center justify-between">
                    <motion.h2 className='text-9xl z-10 text-start font-climate font-semibold'
                        initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                    >
                        I AM <br /> PRAKASH
                    </motion.h2>
                    <motion.h3 className='text-4xl z-10 text-start font-climate font-semibold'
                        initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                    >
                        FULLSTACK <br /> DEVELOPER <br /> AND STUDENT
                    </motion.h3>
                </div>
            </div>
            <motion.div
                className='absolute w-full flex items-center justify-center'
                initial={{ y: "200vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Image src={Prakash} alt='Image of Prakash' className='w-200' />
            </motion.div>
        </section>
    )
}