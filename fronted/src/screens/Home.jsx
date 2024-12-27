// src/screens/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useUser  } from "../context/user.context.jsx";
import Content from "./Content.jsx";

const Home = () => {
    const { user, logout } = useUser ();

    const handleLogout = () => {
        logout(); // Call the logout function from context
    };

    const getUserName = (email) => {
        return email.split('@')[0];
    }
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-white shadow-md w-full py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome to Our App</h1>
                    <nav>
                        {user ? (
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-4">Hello, {user ? (user.email): null}!</span>
                                <button 
                                    onClick={handleLogout} 
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-600 hover:text-gray-800 mx-2">Login</Link>
                                <Link to="/register" className="text-gray-600 hover:text-gray-800 mx-2">Register</Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>
            <main className="flex-grow container mx-auto mt-10 px-4">
                {/* Additional content can go here */}
                {user ? <Content/> : <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Explore Our Features</h2>}
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