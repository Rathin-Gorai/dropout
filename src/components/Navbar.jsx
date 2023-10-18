'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"



const Navbar = () => {
    const [istoggle, setIstoggle] = useState(false)

    return (
        <nav className={`fixed top-0 z-10  w-full bg-white py-5 lg:px-[60px] px-5 flex justify-between items-center`}>
            <div>
                <Link href="/">
                    {/* <Image src={"/images/logo.png"} alt="Logo" width={72} height={36}/> */}
                    <p className="text-2xl font-bold">Edu<span className="text-blue-400">Focus</span></p>
                </Link>
            </div>
            <ul className={`md:flex justify-between z-20  items-center gap-6 transition-all duration-500 absolute md:relative md:right-0 md:h-auto md:w-[auto] md:py-0 md:px-0 md:bg-white ${istoggle ? "top-0 right-[0] h-screen bg-slate-200 w-[80%] py-20 px-10" : "top-0 right-[-100%] h-screen w-[80%] py-20 px-10"}`}>
                <li className="text-gray-900 cursor-pointer transition-all hover:font-bold pb-5 md:pb-0 ">
                    <Link href={'/'}>Home</Link>
                </li>
                <li className="text-gray-900 cursor-pointer transition-all hover:font-bold pb-5 md:pb-0 ">
                    <Link href={'/service'}>Services</Link>
                </li>
                <li className="text-gray-900 cursor-pointer transition-all hover:font-bold pb-5 md:pb-0 ">
                    <Link href={'/about'}>About Us</Link>
                </li>

                <li className="text-gray-900 cursor-pointer transition-all hover:font-bold pb-5 md:pb-0 ">
                    <Link href={'/contact'}>Contact Us</Link>
                </li>
                <div className="btn md:hidden items-center flex">
                    <button className="py-1 px-2 text-sm bg-black  text-white rounded-md mr-2"><Link href={'/signup'}>Signup</Link></button>
                    <button className="py-1 px-2 text-sm bg-blue-400  text-white rounded-md"><Link href={'/login'} className="text-white flex items-center justify-center">Login</Link></button>
                </div>
            </ul>
            {/* menu for mobile device */}
            <div className="md:hidden flex items-center justify-center cursor-pointer z-30" onClick={() => setIstoggle(!istoggle)}>
                <Image src={'/menu-outline.svg'} height={27} width={27} />
            </div>
            <div className="btn md:flex justify-between items-center gap-3 hidden">
                <button className="py-2 px-4 bg-black  text-white rounded-full"><Link href={'/signup'}>Signup</Link></button>
                <button className="py-2 px-4 bg-blue-400  text-white rounded-full"><Link href={'/login'} className="text-white flex items-center justify-center">Login</Link></button>
            </div>
        </nav>
    )
}

export default Navbar