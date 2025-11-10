import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { MdMail, MdOutlineFileDownload } from "react-icons/md";
import Notifier from "../ui/Notifier";
import FooterSection from "./Footer";
import { Button } from "../common/Button";

type NotificationType = "error" | "success";

type Notification = {
    message: string;
    type: NotificationType,
}

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
    const [notification, setNotification] = useState<Notification>({
        message: '',
        type: 'success'
    });

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
        <section id="contact" className="w-full bg-black relative overflow-x-hidden">
            <Notifier message={notification.message} type={notification.type} />
            <div
                className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:space-y-0 md:gap-30 md:py-5"
            >
                <motion.div
                    className="flex-1 space-y-10 py-20 md:py-5 text-accent"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="space-y-5">
                        <h2 className="text-center md:text-start text-5xl md:text-7xl font-playfair font-bold text-white">Let's Connect, <br />Work Together</h2>
                        <p className="text-base md:text-lg text-center md:text-start">Have a project in mind or just want to say hi?</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-8 items-center justify-between">
                        <ul className="flex items-center gap-5 text-white">
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
                                        <Icon className="w-6 h-6" />
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
                        <Button onClick={() => window.open('/docs/Prakash_Resume.pdf')} label='Resume' variant="primary" icon={MdOutlineFileDownload} />
                    </div>
                </motion.div>
                <motion.div
                    className="flex-1 py-5 px-6 space-y-5"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-2xl text-center text-white font-bold">Get In Touch</h2>
                    <form className="space-y-10 py-5 text-white text-sm placeholder-white mx-10 md:mx-0" onSubmit={handleSubmit}>
                        <input className="w-full border-b-2 pb-2 focus:outline-none focus:ring-0" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
                        <input className="w-full border-b-2 pb-2 focus:outline-none focus:ring-0" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
                        <textarea className="w-full border-b-2 pb-2 focus:outline-none focus:ring-0" name="message" id="" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between">
                            <button type="submit" className="block font-semibold border border-muted text-sm text-muted py-2 px-4 cursor-pointer">Send Message</button>
                            <p className="text-muted text-sm">I'll reply within a day</p>
                        </div>
                    </form>
                </motion.div>
            </div>
            <hr className="text-accent/30 mx-40" />
            <FooterSection />
        </section>
    )
}