import Image from 'next/image';
import Prakash from '../../../public/Me/Wings.png'

export default function HeroSection() {
    return(
        <section className="min-h-screen flex flex-col md:flex-row justify-between items-center px-8 md:px-16">
            <div className="flex-1 flex flex-col justify-center space-y-5">
                <p className="text-2xl font-bold">Hello there...</p>
                <h1 className="font-climate text-7xl font-bold text-purple-500">I'm Prakash</h1>
                <h2 className="text-5xl font-bold">Full Stack <span className='text-purple-500'>&</span> AI Agent Developer</h2>
            </div>
            <div className="flex-1 flexjustify-center items-center">
                <Image src={Prakash} alt='Photo of Prakash' className='w-150'/>
            </div>
        </section>
    )
}