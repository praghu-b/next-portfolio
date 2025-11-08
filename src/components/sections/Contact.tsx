import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        const result = await res.json();
        if (result.success) alert("Message sent successfully!");
        else alert("Failed to send message.");
    };

    return (
        <section className="w-full bg-black py-10">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex-2 space-y-15 text-accent">
                    <div className="space-y-5">
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">Let's work together : )</h2>
                        {/* <hr className="w-2/3" /> */}
                        <p className="md:w-4/5 text-lg">Have a project in mind or just want to say hi? Fill out the form, and I’ll get back to you soon : )</p>
                    </div>
                    <div className="space-y-5 text-xl">
                        <p className="flex items-center gap-5"><FaLocationDot className="w-8 h-8 text-white" /> Coimbatore, Tamil Nadu, India</p>
                        <Link href="mailto:prakashbalan555@gmail.com" ><p className="flex items-center gap-5"><MdEmail className="w-8 h-8 text-white" /> prakashbalan555@gmail.com</p></Link>
                    </div>
                </div>
                <div className="flex-1 bg-muted py-5 px-6 space-y-5">
                    <h2 className="text-4xl text-center bg-gradient-to-r from-black to-accent text-transparent bg-clip-text font-bold">Get In Touch</h2>
                    <hr className="mx-10 border-1 text-primary/40" />
                    <form className="space-y-10 py-5 text-accent focus:outline-none focus:ring-0">
                        <input className="w-full border-b-2 pb-2" type="text" name="name" required placeholder="Name" />
                        <input className="w-full border-b-2 pb-2" type="email" name="email" required placeholder="Email" />
                        <textarea className="w-full border-b-2 pb-2" name="message" id="" placeholder="Your Message"></textarea>
                        <button type="submit" className="block font-semibold mx-auto bg-primary text-xl text-muted py-2 px-4">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}