
import { SiNextdotjs, SiExpress, SiTailwindcss, SiLangchain, SiBootstrap, SiFirebase, SiMongodb, SiNodedotjs, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

export const projects = [
    {
        desc: "AI-powered platform that helps founders to boost the process of validating ideas to building MVPs faster.",
        techs: [
            { icon: SiNextdotjs, style: 'text-black', toolTip: 'Next.js' },
            { icon: SiNodedotjs, style: 'text-green-500', toolTip: 'Node.js' },
            { icon: SiExpress, style: 'text-black', toolTip: 'Express.js' },
            { icon: SiTailwindcss, style: 'text-cyan-600', toolTip: 'Tailwind CSS' },
            { icon: SiLangchain, style: 'text-green-600', toolTip: 'LangGraph & LangChain' },
            { icon: SiMongodb, style: 'text-green-600', toolTip: 'MongoDB' },
        ],
        image: '/projects/startzyai.png',
        link: 'https://startzyai.com',
        title: "StartzyAI - Business Accelerator"
    },
    {
        desc: "SSR-based cab booking platform built for a Bangalore travel service, offering fast and SEO-friendly ride management.",
        techs: [
            { icon: SiNodedotjs, style: 'text-green-500', toolTip: 'Node.js' },
            { icon: SiExpress, style: 'text-black', toolTip: 'Express.js' },
            { icon: SiBootstrap, style: 'text-purple-600', toolTip: 'Bootstrap' },
            { icon: SiFirebase, style: 'text-orange-500', toolTip: 'Firebase' }],
        image: '/projects/ksmtravels.png',
        link: 'https://ksmtravels.in',
        title: "KSM Travels - Cab Service"
    },
    {
        desc: "A full stack booking platform built for a tours and travels agency who offers their service all over India.",
        techs: [
            { icon: SiNodedotjs, style: 'text-green-500', toolTip: 'Node.js' },
            { icon: SiReact, style: 'text-cyan-500', toolTip: 'React.js' },
            { icon: SiExpress, style: 'text-black', toolTip: 'Express.js' },
            { icon: SiBootstrap, style: 'text-purple-600', toolTip: 'Bootstrap' },
            { icon: SiMongodb, style: 'text-green-500', toolTip: 'MongoDB' }],
        image: '/projects/vaishnavitravels.png',
        link: 'https://vaishnavitoursandtravels.in',
        title: "Vaishnavi Tours & Travels"
    },
    {
        desc: "Server-side rendered personal portfolio with contact form, built using bootstrap, express.js and node.js during my first internship.",
        techs: [
            { icon: SiHtml5, style: 'text-orange-600', toolTip: 'HTML' },
            { icon: SiCss3, style: 'text-blue-500', toolTip: 'CSS' },
            { icon: SiJavascript, style: 'text-yellow-500', toolTip: 'JavaScript' },
            { icon: SiBootstrap, style: 'text-purple-600', toolTip: 'Bootstrap' },
            { icon: SiNodedotjs, style: 'text-green-500', toolTip: 'Node.js' },
            { icon: SiExpress, style: 'text-black', toolTip: 'Express.js' },
        ],
        image: '/projects/firstportfolio.png',
        link: 'https://praghu-b.onrender.com',
        title: "My First Portfolio"
    },
]