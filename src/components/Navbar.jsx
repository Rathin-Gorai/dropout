'use client'
import { onAuthStateChanged, signOut } from "firebase/auth"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import auth from "../../firebase"
import { useRouter } from "next/navigation"


const Navbar = () => {
    const router = useRouter();
    const [istoggle, setIstoggle] = useState(false)
    const [isLogedIn, setIsLogedIn] = useState(false)

    const check = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLogedIn(true);
            }
        });
    }
    useEffect(() => {
        check();
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            setIsLogedIn(false)
            router.push('/login')
        }).catch((error) => {
            throw error
        });
    }

    return (
        <nav className={` bg-white py-5 lg:px-[60px] px-5 flex justify-between items-center`}>
            <div>
                <Link href="/">
                    {/* <Image src={"/images/logo.png"} alt="Logo" width={72} height={36}/> */}
                    <p className="text-2xl font-bold">Edu<span className="text-blue-400">Focus</span></p>
                </Link>
            </div>
            <ul className={`md:flex justify-between z-20  items-center gap-6 transition-all duration-500 ${istoggle ? "absolute  top-0 right-[0] h-screen bg-slate-200 w-[80%] py-20 px-10" : "hidden"}`}>
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
                {!isLogedIn ?
                    <div className="btn md:hidden items-center flex">
                        <button className="py-1 px-2 text-sm bg-black  text-white rounded-md mr-2"><Link href={'/signup'}>Signup</Link></button>
                        <button className="py-1 px-2 text-sm bg-blue-400  text-white rounded-md"><Link href={'/login'} className="text-white flex items-center justify-center">Login</Link></button>
                    </div>
                    : ""}

            </ul>
            {/* menu for mobile device */}
            <div className="md:hidden flex items-center justify-center cursor-pointer gap-3 z-30" >
                {isLogedIn ?
                    <div onClick={logout} className="md:hidden flex items-center justify-center cursor-pointer z-30 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                    </div> : ""
                }

                <Image onClick={() => setIstoggle(!istoggle)} src={'/menu-outline.svg'} alt={'menu'} height={27} width={27} />
            </div>
            {(!isLogedIn) ?
                <div className="btn md:flex justify-between items-center gap-3 hidden">
                    <button className="py-2 px-4 bg-black  text-white rounded-full"><Link href={'/signup'}>Signup</Link></button>
                    <button className="py-2 px-4 bg-blue-400  text-white rounded-full"><Link href={'/login'} className="text-white flex items-center justify-center">Login</Link></button>
                </div>
                :
                <div className="hidden md:block">
                    <button onClick={logout} className="py-2 px-4 bg-blue-400  hidden rounded-full text-white md:flex items-center justify-center">Logout</button>
                </div>
            }
        </nav>
    )
}

export default Navbar