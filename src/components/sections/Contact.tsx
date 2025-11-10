import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationDot, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { MdMail, MdOutlineFileDownload } from "react-icons/md";
import Notifier from "../common/Notifier";
import FooterSection from "./Footer";
import { Button } from "../common/Button";

export default function ContactSection() {
    const socialLinks = [
        { label: "LinkedIn", icon: FaLinkedin, link: 'https://linkedin.com/in/prakash-balamurugan' },
        { label: "Email", icon: MdMail, link: 'mailto:prakashbalan555@gmail.com' },
        { label: "GitHub", icon: FaGithub, link: 'https://github.com/praghu-b' },
        { label: "Instagram", icon: FaInstagram, link: 'https://instagram.com/praghu._b' },
    ]

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [notification, setNotification] = useState({ message: '', type: 'success' });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await res.json();
        if (result.success) {
            setNotification({ message: "Message sent successfully", type: "success" });
            setFormData({
                name: '',
                email: '',
                message: '',
            })
        } else {
            setNotification({ message: "Failed to send message", type: "error" });
        }
        setTimeout(() => setNotification({ message: "", type: "success" }), 2500);
    };

    return (
        <section className="w-full bg-black relative">
            <Notifier message={notification.message} type={notification.type} />
            <div
                className="max-w-6xl mx-auto flex items-center justify-between gap-20 py-10"
            >
                <motion.div
                    className="flex-2 space-y-8 text-accent"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-5">
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Let's work together : )</h2>
                        <p className="text-lg">Have a project in mind or just want to say hi? Fill out the form, and I’ll get back to you soon.</p>
                        <div className="flex items-center gap-2">
                            <FaLocationDot className="w-6 h-6 text-white" />
                            <p className="text-lg">Coimbatore, Tamil Nadu, India</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <ul className="flex items-center gap-5 text-white">
                            <li className="text-xl font-semibold">Contact :</li>
                            {socialLinks.map(({ label, link, icon: Icon }) => (
                                <motion.li
                                    key={label}
                                    whileHover="hover"
                                    initial="initial"
                                    variants={{
                                        hover: {},
                                        initial: {}
                                    }}
                                    className="flex items-center gap-2"
                                >
                                    <Link href={link} target="_blank" className="flex items-center">
                                        <Icon className="w-8 h-8" />
                                        <motion.p
                                            variants={{
                                                hover: { opacity: 1, width: "auto", marginLeft: 8 },
                                                initial: { opacity: 0, width: 0, marginLeft: 0 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="font-medium overflow-hidden"
                                        >
                                            {label}
                                        </motion.p>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                        <Button onClick={() => window.open('/docs/Prakash_Resume.pdf')} label='Download CV' variant="outline" icon={MdOutlineFileDownload} />
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 bg-muted py-5 px-6 space-y-5"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl text-center bg-gradient-to-r from-black to-accent text-transparent bg-clip-text font-bold">Get In Touch</h2>
                    {/* <hr className="mx-10 border-1 text-primary/40" /> */}
                    <form className="space-y-10 py-5 text-accent" onSubmit={handleSubmit}>
                        <input className="w-full border-b-2 pb-2 focus:outline-none focus:ring-0" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
                        <input className="w-full border-b-2 pb-2 focus:outline-none focus:ring-0" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
                        <textarea className="w-full border-b-2 pb-2 focus:outline-none focus:ring-0" name="message" id="" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
                        <button type="submit" className="block font-semibold mx-auto bg-primary text-xl text-muted py-2 px-4 cursor-pointer">Submit</button>
                    </form>
                </motion.div>
            </div>
            <hr className="text-accent/30 mx-40" />
            <FooterSection />
        </section>
    )
}