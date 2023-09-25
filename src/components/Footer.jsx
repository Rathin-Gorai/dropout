// import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
<<<<<<< HEAD
        <footer className=" text-gray-600 body-font bg-blue-100 flex justify-center ">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:justify-center justify-start">
=======
        <footer className=" text-gray-600 body-font bg-blue-100">
            <div className="container px-5 py-24 mx-auto flex md:justify-center md:items-center lg:items-start md:flex-row flex-wrap flex-col">
>>>>>>> 26899119408a6104a7dba19e2fc4e56ff4903409
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Edu Focus</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Together for Tomorrow: Educate, Engage, Eradicate Dropout</p>
                </div>
                <div className=" md:justify-between flex md:flex-nowrap flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><b>Useful Links</b></h2>
                        <nav className="list-none mb-10">
                            <b>
                                <li>
                                    <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                                </li>
                                <li>
                                    <Link href="/service" className="text-gray-600 hover:text-gray-800">Services</Link>
                                </li>
                                <li>
                                    <Link href={"/about"} className="text-gray-600 hover:text-gray-800">About us</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact us</Link>
                                </li>
                            </b>
                        </nav>
                    </div>
                    <div className=" w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">First Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
<<<<<<< HEAD

=======
>>>>>>> 26899119408a6104a7dba19e2fc4e56ff4903409
        </footer>
    );
};

export default Footer;
