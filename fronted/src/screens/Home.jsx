import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from "../context/user.context.jsx";

const Home = () => {

    const { user } = useUser();
    console.log(user);
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-white shadow-md w-full py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome to Our App</h1>
                    <nav>
                        <Link to="/login" className="text-gray-600 hover:text-gray-800 mx-2">Login</Link>
                        <Link to="/register" className="text-gray-600 hover:text-gray-800 mx-2">Register</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto mt-10 px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Explore Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature 1</h3>
                        <p className="text-gray-600">Description of feature 1. This is a brief overview of what this feature does.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature 2</h3>
                        <p className="text-gray-600">Description of feature 2. This is a brief overview of what this feature does.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature 3</h3>
                        <p className="text-gray-600">Description of feature 3. This is a brief overview of what this feature does.</p>
                    </div>
                </div>
            </main>

            <footer className="bg-white shadow-md w-full py-4">
                <div className="container mx-auto text-center text-gray-600">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;