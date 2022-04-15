import React, { useContext, useState } from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import firebase from "firebase/compat/app";
import 'firebase/compat/app';
import { auth }  from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


function Login(){
const { handleRegform } = useContext(AuthContext);
const [userValue, setUser] = useState('');
const [pwValue, setPW] = useState('');
const navigate = useNavigate();

const handleRegclick = (evt) => {
    handleRegform();
    navigate("/register")
}

    return(
    <div id='log-card'>
    <img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1649463298/homeLogo_zasc7k.png' />
    <form className=''>
    <div className='card-body '>
    <div className="form-outline mb-1">
        <h3>Sign In</h3>
        <br />
        <input placeholder='Username' type='text' className='form-control form-control-md' id='username'/>
        </div>
        <br/>
        <div className="form-outline mb-3">
        <input autoComplete="on" placeholder='Password' className='form-control form-control-md' type='password' id='password' />
        </div>
        <button className='btn btn-dark btn-lg btn-block'>SIGN IN</button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button onClick={handleRegclick} type='button' className='btn btn-warning btn-lg btn-block'>NEW USER</button>
        </div>
    </form>
    <h3>- or -</h3>
    <br/>
    <div onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} className='log-button google'>
    <GoogleOutlined /> Sign in with your Google
    </div>
    < br/>     < br/>
    <div onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())} className='log-button facebook'> 
    <FacebookOutlined /> Sign in with Facebook
    </div>
    </div>
    )
}

export default Login;
