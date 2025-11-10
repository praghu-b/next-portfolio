import { motion, AnimatePresence } from "framer-motion";
import { TiTick, TiTimes } from "react-icons/ti";

export default function Notifier({ message, type }: { message: string; type: 'success' | 'error' }) {
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-6 py-3 rounded-full shadow-lg text-white font-medium bg-primary`}
                >
                    {message}{type == 'success' ? <TiTick className="w-6 h-6 text-primary bg-white rounded-full" /> : <TiTimes className="w-6 h-6 text-primary bg-white rounded-full" />}
                </motion.div>
            )}
        </AnimatePresence>
    )
}