import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './Login.css'; 
import axios from '../config/axios';
import { useUser } from '../context/user.context.jsx';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/users/login',{
            email: email,
            password: password
        }).then((response) => {
        
            console.log(response.data);
            localStorage.setItem('token', response.data.token);

            const userData = response.data.user;
            login(userData);
            navigate('/'); 

        }).catch((error) => {
            console.log(error.response.data);
        })
    };

    return (
        <div className="relative flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96 transform transition-all duration-500 hover:scale-105 z-10">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back!</h1>
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
                    <div className="mb-6">
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
                    <button 
                        type="submit" 
                        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Don't have an account? <Link to="/register" className="text-black hover:underline">Create one</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;