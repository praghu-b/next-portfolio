import { FaHeart } from "react-icons/fa";

export default function FooterSection() {
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