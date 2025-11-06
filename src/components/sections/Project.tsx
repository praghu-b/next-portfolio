import Image from "next/image";
import { motion } from "framer-motion";
import Prakash from "../../../public/me/ooty-landscape.jpeg"
import { Button } from "../common/Button";

export default function ProjectSection() {

    return (
        <section className="relative min-h-screen w-full">
            <div className="max-w-7xl mx-auto space-y-24">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="relative">
                        <div className="absolute -top-5 w-3/5 h-8 bg-primary rounded-t-xl"></div>
                        <div className="flex flex-col shadow-lg rounded-2xl overflow-hidden">
                            <div className="flex-3 h-80 pl-3 pr-1 pt-3 bg-primary">
                                <Image src={Prakash} alt="Prakash" />
                            </div>
                            <div className="flex-1 flex items-center justify-between p-4 bg-muted">
                                <div className="flex-3 space-y-2">
                                    <p className="text-xl text-primary font-bold">Project Title</p>
                                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod.</p>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <Button label={'Open'} variant="primary"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
