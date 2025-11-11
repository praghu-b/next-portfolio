import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

export default function MobileMenu({ handleMenu }: { handleMenu: (open: boolean) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-15 left-5 right-5 bg-white shadow-md rounded-2xl p-5 z-10 md:hidden"
        >
            <NavLinks onClick={() => handleMenu(false)} />
        </motion.div>
    )
}