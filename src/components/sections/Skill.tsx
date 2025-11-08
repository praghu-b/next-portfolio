import { motion } from "framer-motion"

export default function ProjectSection() {

    return (
        <section className="min-h-screen w-full">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="space-y-4 mb-10 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <p className="text-4xl font-bold">What I Build With!</p>
                    <motion.p
                        className="text-lg text-accent"
                        // animate={{ opacity: [0.5, 1, 0.5] }}
                        // transition={{ repeat: Infinity, duration: 2 }}
                    >
                        My go-to technologies and frameworks
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}