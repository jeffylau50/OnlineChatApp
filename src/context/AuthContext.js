import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=> {
    auth.onAuthStateChanged((user)=> {
        setUser(user);
        setloading(false);
        if(user){
        navigate("/chat")
        }else{
            navigate("")

        }
    })
    }, [user, navigate]);

    const value = { user };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}