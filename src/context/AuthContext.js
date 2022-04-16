import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';


export const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(true);
    const [user, setUser] = useState(null);
    const [regFormvalue, setRegform] = useState(false);
    const [errorValue, setError] = useState(false)

    const navigate = useNavigate();
    const handleRegform = (evt) => {
        setRegform(!regFormvalue)
    }
    
    useEffect(()=> {
    auth.onAuthStateChanged((user)=> {
        setUser(user);
        setloading(false);
        if(user){
        navigate("/chat")
        }else if(regFormvalue==true){
            navigate("/register")
        }
        else{
            navigate("")

        }
    })
    }, [user, navigate]);

    const value = { user };

    return(
        <AuthContext.Provider value={{value, handleRegform, errorValue, setError}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}