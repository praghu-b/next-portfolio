import { motion } from "framer-motion";
import { GoHomeFill } from "react-icons/go";
import { LuBookUser } from "react-icons/lu";
import { TbFolderCode } from "react-icons/tb";
import { MdPhoneForwarded } from "react-icons/md";
import { BsTools } from "react-icons/bs";

export default function NavLinks({ onClick }: { onClick?: () => void }) {
    const navLinks = [
        { label: "Home", icon: GoHomeFill },
        { label: "About", icon: LuBookUser },
        { label: "Projects", icon: TbFolderCode },
        { label: "Skills", icon: BsTools },
        { label: "Contact", icon: MdPhoneForwarded },
    ];

    return (
        <ul className="flex flex-col md:flex-row items-center justify-between gap-8">
            {navLinks.map(({ label, icon: Icon }) => (
                <li key={label}>
                    <a
                        href={`#${label.toLowerCase()}`}
                        onClick={onClick}
                    >
                        <motion.div
                            className="flex items-center font-semibold gap-2"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{label}</span>
                        </motion.div>
                    </a>
                </li>
            ))}
        </ul>
    )
}