// src/components/Login.js
'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import auth from '../../../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast';
function Login() {
    const router = useRouter();
    const check = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/dashboard')
            }
        });
    }
    useEffect(() => {
        check();
    }, [])
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {

        await signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in 
                toast.success("Login Successful")
                router.push('/dashboard');
                // ...
            })
            .catch((error) => {
                toast.error("Invalid Credentails")
            });
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center md:pt-28">
            <div className="bg-white p-8 rounded shadow-lg w-[90%] sm:w-96">
                <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="w-full border-none outline-none  rounded-lg px-3 py-2 "
                        placeholder="Enter your email"
                        value={formData.email}
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
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                >
                    Login
                </button>

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
