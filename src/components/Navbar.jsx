'use client'
import Image from "next/image"

import Link from "next/link"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        // <header className="bg-white text-black md:h-[100px] p-4 md:px-2 ">
        <>
            <div className="flex items-center gap-2 justify-between  md:mb-0 bg-white p-2">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full">
                        <Image src="/logo.png" height={48} width={48} />
                    </div>
                    <p className="ml-2 font-semibold md:text-sm text-black text-xs">Government of Gujarat</p>
                </div>
                <div className="mr-4">
                    <button className="px-4 py-2 bg-slate-950 text-white rounded-md flex items-center justify-center hover:bg-slate-900">
                        <Link href={'/login'} className="text-xs md:text-sm ">Login/SignUp</Link>
                    </button>

                </div>
            </div>
            <nav className="md:py-2  px-0 md:px-6 bg-white flex flex-row items-center justify-between relative">
                <div className="flex items-center md:ml-0 ml-2">
                    <Image src={'/edu.png'} height={48} width={48} />
                    <h1 className="md:text-3xl text-2xl font-bold ">Edu Focus</h1>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-blacktext-2xl font-thin focus:outline-none md:mr-0 mr-2"
                    >
                        {!isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`${!isOpen ? 'block absolute w-[100%]  bg-slate-100 top-[100%] z-40' : 'hidden'
                        } md:flex  md:items-center `}
                >
                    <ul className="md:flex md:space-x-4 mt-4 md:mt-0 text-center">
                        <li className="md:p-0 p-3">
                            <Link href={"/"} className="block text-slate-950 hover:text-slate-900">Home</Link>
                        </li>
                        <li className="md:p-0 p-3">
                            <Link href={"/links"} className="block text-slate-950 hover:text-slate-900">Links</Link>
                        </li>
                        <li className="md:p-0 p-3">
                            <Link href={"/about"} className="block text-slate-950 hover:text-slate-900">About Us</Link>
                        </li>
                        <li className="md:p-0 p-3">
                            <Link href={"/contact"} className="block text-slate-950 hover:text-slate-900">Contact Us</Link>
                        </li>
                    </ul>
                </div>


            </nav>
        </>
        // </header>

    )
}

export default Navbar





{/* 
          {
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white text-3xl focus:outline-none"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>


                }
                <ul className={`md:flex md:flex-row hidden gap-4 items-center justify-center md:space-x-4 ${!isOpen ? 'absolute bg-red-300 top-[100%] w-[100%] z-40 text-center' : ''}`}>
                    <li>
                        <Link href={"/"} className="block text-slate-950 hover:text-slate-900">Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"} className="block text-slate-950 hover:text-slate-900">About us</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className="block text-slate-950 hover:text-slate-900">Contact us</Link>
                    </li>
                    <li>
                        <Link href={"/Links"} className="block text-slate-950 hover:text-slate-900">Links</Link>
                    </li>
                </ul> */}