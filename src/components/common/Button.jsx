import Link from "next/link"

export const Button = ({ href, label, onClick, variant = 'primary', icon: Icon }) => {
    const base = "text-base font-semibold mt-10 px-4 py-2 rounded-full transition-all duration-300 flex items-center"
    const variants = {
        primary: "text-white bg-primary hover:bg-black border-3 border-primary",
        outline: "text-primary bg-white hover:bg-black hover:text-white border-3 border-black"
    }

    if (href) {
        return (
            <Link href={href} className={`${base} ${variants[variant]}`}>
                {label}
                {Icon && <Icon className='w-5 h-5 ml-2' />}
            </Link>
        )
    }

    return (
        <button className={`${base} ${variants[variant]} hover:cursor-pointer`} onClick={onClick}>
            {label}
            {Icon && <Icon className='w-5 h-5 ml-2' />}
        </button>
    )
}