import { motion } from "framer-motion";
import { ul } from "framer-motion/client";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function FooterSection() {
    const socialLinks = [
        { label: "LinkedIn", icon: FaLinkedin, link: 'https://linkedin.com/in/prakash-balamurugan' },
        { label: "Email", icon: MdMail, link: 'mailto:prakashbalan555@gmail.com' },
        { label: "GitHub", icon: FaGithub, link: 'https://github.com/praghu-b' },
        { label: "Instagram", icon: FaInstagram, link: 'https://instagram.com/praghu._b' },
    ]
    const quicklinks = [
        { label: "Home", link: '#hero' },
        { label: "About", link: '#about' },
        { label: "Projects", link: '#projects' },
        { label: "Skills", link: '#skills' },
        { label: "Contact", link: '#contact' },
    ]
    return (
        <footer className="w-full py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex-2 text-center space-y-1">
                    <p className="text-muted text-xs">© 2025, All Rights Reserved.</p>
                    <p className="text-accent text-xs flex items-center justify-center gap-2">Built with <FaHeart className="w-3 h-3 text-red-500" /> Next.js & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}