import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Prakash from '../../../public/Me/NoBorderNoWings.png';
import { Code, GraduationCap, HeartHandshake } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="min-h-screen w-full flex items-center">
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-16'>
                {/* <motion.div
                    className="flex-1 flex flex-col justify-center space-y-5"
                >
                    <motion.h1
                        className="font-climate text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700"
                        initial={{ x: "-50vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "backOut" }}
                    >
                        I'm Prakash
                    </motion.h1>
                    <motion.h2
                        className="text-4xl font-bold flex items-center gap-3"
                        initial={{ x: "-50vw" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <GraduationCap className='h-10 w-10 p-2 rounded-full border text-white bg-black hover:rotate-z-45 transition-all duration-300' />
                        <p>Fresher</p>
                        <span className='text-purple-700'>&</span>
                        <Code className='h-10 w-10 p-2 rounded-full border text-white bg-black hover:rotate-y-45 transition-all duration-300' />
                        <p>Full Stack Dev.</p>
                    </motion.h2>
                    <motion.p
                        className="w-[90%] text-lg mt-5"
                        initial={{ x: "-50vw" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
                    >
                        a <span className='font-semibold'>Full-stack Developer</span> and <span className='font-semibold'>Student</span> specialize in crafting sleek frontends and building reliable backends, by utilizing modern technologies. With a passion for problem-solving and learning, I turn ideas into products.
                    </motion.p>
                    <motion.div
                        className='flex items-center font-semibold gap-10 mt-8'
                    >
                        <Link href="mailto:prakashbalan555@gmail.com">
                            <motion.button
                                className='relative flex items-center bg-purple-700 px-5 py-3 gap-2 border-2 border-purple-700 text-white hover:text-purple-700 transition-all duration-300 overflow-hidden'
                                initial={{ x: "-250%" }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
                                whileHover="hover"
                            >
                                <motion.span
                                    className='absolute left-0 right-0 h-full bg-white'
                                    initial={{ x: "-100%", opacity: 0 }}
                                    variants={{ "hover": { x: 0, opacity: 1 } }}
                                    transition={{ ease: "easeOut" }}
                                ></motion.span>
                                <span className='flex items-center gap-2 z-10'>
                                    <HeartHandshake className='h-6 w-6' />
                                    Help on project?
                                </span>
                            </motion.button>
                        </Link>
                        <Link href="./docs/Prakash.pdf" target='_blank'>
                            <motion.button
                                className='relative flex items-center px-5 py-3 gap-2 text-black hover:text-white border-2 border-purple-700 transition-all duration-300 overflow-hidden'
                                initial={{ x: "-500%" }}
                                animate={{ x: 0 }}
                                whileHover="hover"
                                transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
                            >
                                <motion.span
                                    className='absolute left-0 right-0 h-full bg-purple-700'
                                    initial={{ x: "-100%", opacity: 0 }}
                                    variants={{ "hover": { x: 0, opacity: 1 } }}
                                    transition={{ ease: "easeOut" }}
                                ></motion.span>
                                <span className='flex items-center gap-2 z-1'>
                                    View Resume
                                </span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div> */}
                <motion.div
                    className="flex-1 flex justify-center items-center"
                    initial={{ x: "100vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image src={Prakash} alt='Photo of Prakash' className='w-150 invert-img' />
                </motion.div>
            </div>
        </section>
    )
}