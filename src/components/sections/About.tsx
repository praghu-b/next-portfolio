
export default function About() {

    return (
        <section className="w-full min-h-screen">
            <div className="max-w-7xl mx-auto flex items-center justify-between mt-20">
                <div className="flex-1 h-full bg-purple-500 md:p-10 text-white font-bold font-climate">
                    <p className="text-9xl">Me ?</p>
                    <p className="text-8xl">I'm Prakash !</p>
                </div>
                <div className="flex-1 md:ml-5 md:px-10 py-5 space-y-5">
                    <p className="text-3xl font-bold mb-5">About Me</p>
                    <ul className="space-y-5 text-xl">
                        <li>I'm a Full-stack Developer as well as a Computer Science final year Student with 20+ months of internship experience under two firms. </li>
                        <li>I specialize in Frontend(React.js, Next.js) and Backend(Express.js, Django) development and currently exploring Agentic AI(LangGraph, LangChain) and Data Engineering as well. </li>
                        <li>I've 20+ months of internship experience in two smaller firms in coimbatore.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
