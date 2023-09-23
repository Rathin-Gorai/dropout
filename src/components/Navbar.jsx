import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        // <header className="bg-white text-black md:h-[100px] p-4 md:px-2 ">
        <>
            <div className="flex items-center gap-2 justify-between  md:mb-0 bg-white p-2">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full">
                        {/* You can add your Image component here */}
                    </div>
                    <p className="ml-2 font-semibold md:text-xl text-black text-md">Edu Focus</p>
                </div>
                <div className="mr-4">
                    <button className="px-4 py-2 bg-blue-500 text-black text-sm md:text-md rounded-md hover:bg-blue-600">
                        <Link href={'/login'}>Login/SignUp</Link>
                    </button>

                </div>
            </div>
            <nav className="md:py-4 py-2 bg-slate-200 flex md:flex-row item-center flex-col justify-center">
                <ul className="flex md:flex-row flex-col gap-4 items-center justify-center md:space-x-4">
                    <li>
                        <Link href={"/"} className="block text-blue-500 hover:text-blue-700">Home</Link>
                    </li>
                    <li>
                        <Link href={"/About"} className="block text-blue-500 hover:text-blue-700">About us</Link>
                    </li>
                    <li>
                        <Link href={"/Contact"} className="block text-blue-500 hover:text-blue-700">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </>
        // </header>

    )
}

export default Navbar