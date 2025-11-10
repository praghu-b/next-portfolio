import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export default function ProjectSection() {

    const { first, second, third, fourth } = skillsData;

    return (
        <section id="skills" className="w-full py-10 md:py-20 overflow-x-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="space-y-4 mb-10 md:mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-3xl md:text-4xl font-playfair font-extrabold">What I Build With!</p>
                    <p className="md:text-lg text-accent">
                        Visualizing my familiarity, the technologies I wield at every level of depth.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-around md:gap-4">

                    <motion.div
                        className="w-full md:flex-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h3 className="text-3xl sm:text-5xl font-playfair font-extrabold mb-10 text-center md:text-left">The Skill Chakra</h3>

                        <div className="space-y-5 md:w-3/5 px-5 md:px-0 mx-auto md:mx-0">
                            <div className="flex items-center space-x-3 text-white bg-blue-700/80 rounded">
                                <div className="space-y-2 px-4 py-2">
                                    <p className="text-lg font-semibold">Core Expertise (Inner Ring)</p>
                                    <p className="text-sm">Daily use, high proficiency, mentoring level.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 text-white bg-emerald-700/80 rounded">
                                <div className="space-y-2 px-4 py-2">
                                    <p className="text-lg font-semibold">Advanced Skills</p>
                                    <p className="text-sm">Experienced with complex features and frameworks.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 text-white bg-violet-700/80 rounded">
                                <div className="space-y-2 px-4 py-2">
                                    <p className="text-lg font-semibold">Familiar & Competent</p>
                                    <p className="text-sm">Regular use on projects, solid foundation.</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 text-white bg-cyan-700/80 rounded">
                                <div className="space-y-2 px-4 py-2">
                                    <p className="text-lg font-semibold">Exploring & Learning (Outer Ring)</p>
                                    <p className="text-sm">Currently learning or used on simple projects.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative flex items-center justify-center scale-[0.70] sm:scale-[0.8] lg:scale-80">
                        <motion.div
                            className="relative w-[500px] h-[500px] flex items-center justify-center border border-cyan-400/40 rounded-full shadow-[0_0_25px_8px_rgba(34,211,238,0.4)]"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            animate={{ rotate: -360 }}
                            transition={{
                                rotate: { repeat: Infinity, duration: 30, ease: "linear" },
                                opacity: { duration: 0.8, ease: "easeInOut" },
                                x: { duration: 0.8, ease: "easeInOut" }
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {fourth.map(({ icon: Icon, name, style }, index) => (
                                <Icon
                                    key={index}
                                    className={`absolute w-8 h-8 ${style}`}
                                    title={name}
                                    style={{
                                        transform: `rotate(${(360 / fourth.length) * index}deg) translate(250px) rotate(-${(360 / fourth.length) * index}deg)`,
                                    }}
                                />
                            ))}

                            <motion.div
                                className="relative w-[375px] h-[375px] flex items-center justify-center border border-violet-400/40 rounded-full shadow-[0_0_25px_8px_rgba(139,92,246,0.4)]"
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                            >
                                {third.map(({ icon: Icon, name, style }, index) => (
                                    <Icon
                                        key={index}
                                        className={`absolute w-10 h-10 ${style}`}
                                        title={name}
                                        style={{
                                            transform: `rotate(${(360 / third.length) * index}deg) translate(187.5px) rotate(-${(360 / third.length) * index}deg)`,
                                        }}
                                    />
                                ))}

                                <motion.div
                                    className="relative w-[250px] h-[250px] flex items-center justify-center border border-emerald-400/40 rounded-full shadow-[0_0_25px_8px_rgba(52,211,153,0.4)]"
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                >
                                    {second.map(({ icon: Icon, name, style }, index) => (
                                        <Icon
                                            key={index}
                                            className={`absolute w-13 h-13 ${style}`}
                                            title={name}
                                            style={{
                                                transform: `rotate(${(360 / second.length) * index}deg) translate(125px) rotate(-${(360 / second.length) * index}deg)`,
                                            }}
                                        />
                                    ))}

                                    <motion.div
                                        className="relative w-[125px] h-[125px] flex items-center justify-center border border-blue-400/40 rounded-full shadow-[0_0_25px_8px_rgba(96,165,250,0.4)]"
                                        animate={{ rotate: -360 }}
                                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                    >
                                        {first.map(({ icon: Icon, name, style }, index) => (
                                            <Icon
                                                key={index}
                                                className={`absolute w-15 h-15 ${style}`}
                                                title={name}
                                                style={{
                                                    transform: `rotate(${(360 / first.length) * index}deg) translate(62.5px) rotate(-${(360 / first.length) * index}deg)`,
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}