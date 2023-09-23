// src/components/Register.js
'use client'
// src/components/Registration.js
import Link from 'next/link';
import React, { useState } from 'react';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        gender: '', // Change to select
        dob: '',
        contact: '',
        email: '',
        district: '', // Change to select
        block: '',
        school: '',
        schoolCode: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here using formData
        console.log('Form data submitted:', formData);
    };

    const districtOptions = [
        'District A',
        'District B',
        'District C',
        // Add more district options here
    ];

    const genderOptions = ['Male', 'Female', 'Other'];

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
                <h2 className="text-3xl font-semibold text-center mb-6">Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Gender
                                </option>
                                {genderOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dob" className="block text-gray-700 font-semibold mb-2">
                                Date of Birth
                            </label>
                            <input
                                type="text"
                                id="dob"
                                name="dob"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your date of birth"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">
                                Contact
                            </label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your contact number"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                School Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                placeholder="Enter your school email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="district" className="block text-gray-700 font-semibold mb-2">
                                District
                            </label>
                            <select
                                id="district"
                                name="district"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-400"
                                value={formData.district}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select District
                                </option>
                                {districtOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <p className="text-gray-500 text-sm mt-1">
                                Example districts: District A, District B, District C
                            </p>
                        </div>
                        {/* Add more fields similar to the above examples */}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full mt-4"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
