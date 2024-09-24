import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogIn, setIsLogIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLogIn(!!token);
    }, []);

    return (
        <AuthContext.Provider value={{ isLogIn, setIsLogIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
