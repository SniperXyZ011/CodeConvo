import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser ] = useState({}); 

    const login = (userData) => {
        setUser (userData);
        // localStorage.setItem('token', userData.token);
        console.log("Here in login ", userData )
    };

    const logout = () => {
        setUser (null); 
        localStorage.removeItem('token', userData.token);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};