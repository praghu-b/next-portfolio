import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Prakash from '../../../public/Me/Wings.png';
import { Code, Download, GraduationCap, HeartHandshake } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="min-h-screen w-full flex items-center">
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-16'>
                <motion.div
                    className="flex-1 flex flex-col justify-center space-y-5"
                >
                    <motion.h1
                        className="font-climate text-7xl font-bold text-purple-700"
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
                        <GraduationCap className='h-10 w-10 p-2 rounded-full border text-white bg-black' />
                        <p>Fresher</p>
                        <span className='text-purple-700'>&</span>
                        <Code className='h-10 w-10 p-2 rounded-full border text-white bg-black' />
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
                                className='flex items-center bg-purple-700 hover:bg-purple-900 hover:scale-105 px-3 py-2 gap-2 text-white shadow-xl shadow-gray-400 transition-all duration-400 cursor-pointer'
                                initial={{ x: "-250%" }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
                            >
                                <HeartHandshake className='h-7 w-7' />
                                Help on project?
                            </motion.button>
                        </Link>
                        <Link href="./docs/Prakash.pdf" target='_blank'>
                            <motion.button
                                className='flex items-center hover:scale-105 px-3 py-2 gap-2 text-purple-700 border-2 border-purple-700 transition-all duration-300'
                                initial={{ x: "-500%" }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
                            >
                                <Download className='h-6 w-6' />
                                Resume
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex-1 flex justify-center items-center"
                    initial={{ x: "50vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image src={Prakash} alt='Photo of Prakash' className='w-150 invert-img' />
                </motion.div>
            </div>
        </section>
    )
}