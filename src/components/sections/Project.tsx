import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectSection() {

    return (
        <section className="relative min-h-screen w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">Things I've Built!</h1>
                        <p className="text-xl text-accent font-semibold">My Works</p>
                    </div>
                    <motion.p
                        className="text-lg text-accent font-semibold"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        #CodeInAction
                    </motion.p>
                </div>
                <div className="">
                    
                </div>
            </div>
        </section>
    )
}