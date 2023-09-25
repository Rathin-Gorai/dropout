// src/components/Login.js
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here using formData.username and formData.password
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="bg-slate-200 md:min-h-screen h-[50%] pt-28 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
                <h2 className="text-3xl font-semibold text-center mb-6">Admin Login </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full border-none outline-none  rounded-lg px-3 py-2 "
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border-none outline-none  rounded-lg px-3 py-2"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link href="/forgetpage" className="text-blue-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Don&rsquo;t have an account?{' '}
                        <Link href="/signup" className="text-blue-500 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
