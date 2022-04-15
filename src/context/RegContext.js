import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext.js";

export const RegContext = createContext();


export function RegProvider(props) {
    const { user } = useAuth();
    const [regFormvalue, setRegform] = useState(false);
    const navigate = useNavigate();
    const handleRegform = (evt) => {
        setRegform(!regFormvalue)
    }

    useEffect(()=> {
    if(user){
        navigate("/chat")
    }else{
        navigate('/register')
    }
    }, [regFormvalue])
    return(
        <RegContext.Provider value={{regFormvalue, handleRegform}}>
            {props.children}
        </RegContext.Provider>
    )
}