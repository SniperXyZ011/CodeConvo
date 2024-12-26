import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './Login.css'; 
import axios from '../config/axios';
import { useUser } from "../context/user.context.jsx";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Set loading state
        setLoading(true);

        try {
            const response = await axios.post('/users/register', {
                email: email,
                password: password,
            });
            console.log(response.data);

            localStorage.setItem('token', response.data.token);

            const userData = response.data.user;
            login(userData);

            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate('/'); 

        } catch (error) {
    
            if (error.response) {
                alert(`Error: ${error.response.data.message || 'Registration failed. Please try again.'}`);
            } else {
                alert('Network error. Please check your connection and try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96 transform transition-all duration-500 hover:scale-105 z-10">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create an Account</h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2">Email:</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black transition duration-300 ease-in-out" 
                            placeholder="Enter your email" 
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2">Password:</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black transition duration-300 ease-in-out" 
                            placeholder="Enter your password" 
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 text-sm font-bold mb-2">Confirm Password:</label>
                        <input 
                            type="password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black transition duration-300 ease-in-out" 
                            placeholder="Confirm your password" 
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={`bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading} 
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Already have an account? <Link to="/login" className="text-black hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;