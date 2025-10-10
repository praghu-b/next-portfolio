import Image from 'next/image';
import { motion } from 'framer-motion';
import Prakash from '../../../public/Me/Wings.png';
import { Code, GraduationCap } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="min-h-screen w-full flex items-center">
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-16'>
                <motion.div
                    className="flex-1 flex flex-col justify-center space-y-5"
                >
                    <motion.h1
                        className="font-climate text-7xl font-bold text-purple-700"
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        I'm Prakash
                    </motion.h1>
                    <motion.h2
                        className="text-4xl font-bold flex items-center gap-3"
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: .3, ease: "easeOut" }}
                    >
                        <GraduationCap className='h-10 w-10 p-2 rounded-full border text-white bg-black' />
                        <p>Fresher</p>
                        <span className='text-purple-700'>&</span>
                        <Code className='h-10 w-10 p-2 rounded-full border text-white bg-black' />
                        <p>Full Stack Dev.</p>
                    </motion.h2>
                    <motion.p
                        className="w-[90%] text-lg mt-5"
                        initial={{ x: "-200%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: .5, ease: "easeOut" }}
                    >
                        a <span className='font-semibold'>Full-stack Developer</span> and <span className='font-semibold'>Student</span> specialize in crafting sleek frontends and building reliable backends, by utilizing modern technologies. With a passion for problem-solving and learning, I turn ideas into products.
                    </motion.p>
                </motion.div>
                <motion.div
                    className="flex-1 flex justify-center items-center"
                    initial={{ x: "200%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image src={Prakash} alt='Photo of Prakash' className='w-150 invert-img' />
                </motion.div>
            </div>
        </section>
    )
}