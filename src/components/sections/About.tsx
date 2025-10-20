import {motion, useScroll, useTransform} from "framer-motion";

export default function About() {
    return (
        <section className="w-full min-h-screen">
            <div className="max-w-7xl mx-auto flex items-center bg-purple-500 justify-between text-white md:py-10 mt-20">
                <div className="flex-2">
                    <p className="ml-10 text-9xl font-bold font-climate">Me ? <br />I'm Prakash !</p>
                </div>
                <div className="flex-1 space-y-10">
                    <p className="text-xl font-semibold bg-purple-700 shadow shadow-black/50 border-white px-5 py-5">A Full-stack Developer and a Student on his Final Year Computer Science major with 20+ months of internship experience under two firms.</p>
                    <ul className="flex items-center justify-between">
                        <li className="font-bold"><span className="text-5xl">20+</span><br />Experience</li>
                        <li className="font-bold"><span className="text-5xl">10+</span><br />Live Projects</li>
                        <li className="font-bold"><span className="text-5xl">20+</span><br />Experience</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
