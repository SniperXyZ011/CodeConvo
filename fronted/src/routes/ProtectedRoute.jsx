import React from 'react';
import { Link } from 'react-router-dom';
import { useUser  } from '../context/user.context.jsx';

const ProtectedRoute = ({ children }) => {
    const { user } = useUser ();

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold text-red-600 mb-4">You are not logged in.</h1>
                <p className="text-lg mb-2">Please log in to access this page.</p>
                <Link to="/"><button className='bg-slate-900 p-1 rounded text-white hover:bg-slate-600'>Go to home page</button></Link>
            </div>
        );
    }
    return children;
};

export default ProtectedRoute;