// src/components/ForgotPassword.
'use client'
import React, { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the "Forgot Password" process here using the email
        console.log('Email submitted for password reset:', email);
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
                <h2 className="text-3xl font-semibold text-center mb-6">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
