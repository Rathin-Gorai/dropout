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
            <div className="w-full fixed z-10 md-50">
                <div className="flex items-center gap-2 justify-between  md:mb-0 p-2 bg-blue-50">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full">
                            <Image src="/logo.png" alt="logo" height={48} width={48} />
                        </div>
                        <p className="ml-2 font-semibold md:text-sm text-black text-xs">Government of Gujarat</p>
                    </div>
                    <div className="mr-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <Link href={'/login'} className="text-xs md:text-sm ">Login/Register</Link>
                        </button>

                    </div>
                </div>
                <nav className="md:py-2  px-0 md:px-6 flex flex-row items-center justify-between  bg-blue-100 top-0 w-full">
                    <Link href="/">
                        <div className="flex items-center md:ml-0 ml-2">
                            <Image src={'/edu.png'} alt="edu" height={48} width={48} />
                            <h1 className="md:text-3xl text-2xl font-bold ">Edu Focus</h1>
                        </div></Link>
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
                        <ul className="md:flex md:space-x-4 mt-4 md:mt-0 text-center font-bold ">
                            <li className="md:p-0 p-3">
                                <Link href={"/"} className="block text-slate-950 hover:text-blue-500 hover:underline">Home</Link>
                            </li>
                            <li className="md:p-0 p-3">
                                <Link href={"/service"} className="block text-slate-950 hover:text-blue-500 hover:underline">Services</Link>
                            </li>
                            <li className="md:p-0 p-3">
                                <Link href={"/about"} className="block text-slate-950 hover:text-blue-500 hover:underline">About Us</Link>
                            </li>
                            <li className="md:p-0 p-3">
                                <Link href={"/contact"} className="block text-slate-950 hover:text-blue-500 hover:underline">Contact Us</Link>
                            </li>
                        </ul>
                    </div>


                </nav>
            </div>
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