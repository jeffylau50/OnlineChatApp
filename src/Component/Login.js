import React, { useContext, useState } from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import firebase from "firebase/compat/app";
import 'firebase/compat/app';
import { auth }  from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";


function Login(){
const { handleRegform, errorValue, setError } = useContext(AuthContext);
const [emailValue, setEmail] = useState('');
const [pwValue, setPW] = useState('');
const navigate = useNavigate();

const auth1 = getAuth();

const handleRegclick = (evt) => {
    handleRegform();
    setError(false)
    navigate("/register")
}

const handleLogemail = (evt) => {
    setEmail(evt.target.value)
}

const handleLogpw = (evt) => {
    setPW(evt.target.value)
}

const handleLogin = () => {
    signInWithEmailAndPassword(auth1, emailValue, pwValue)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(true)
    });
    setError(false)
    navigate("/chat")
  
}
    return(
    <div class="">
    <div id='log-card'>
    <img className='img-fluid' src='https://res.cloudinary.com/djgjwxdih/image/upload/v1649463298/homeLogo_zasc7k.png' />
    <form onSubmit={handleLogin}>
    <div className='card-body '>
    <div className="form-outline mb-1">
        <h3>Sign In</h3>
        <br />
        <input onChange={handleLogemail} placeholder='Email' type='email' className='form-control form-control-md' id='email'/>
        </div>
        <br/>
        <div className="form-outline mb-3">
        <input onChange={handleLogpw} autoComplete="on" placeholder='Password' className='form-control form-control-md' type='password' id='password' />
        </div>
        <button className='btn btn-dark btn-lg btn-block customButtonsetting'>SIGN IN</button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button onClick={handleRegclick} type='button' className='btn btn-warning btn-lg btn-block customButtonsetting'>NEW USER</button>
        </div>
    </form>
    <h3>- or -</h3>
    <br/>
    <div onClick={()=> auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())} className='log-button google customGooglebutton'>
    <GoogleOutlined /> Sign in with Google
    </div>
    < br/>  
    {errorValue&&< br/>}
    {errorValue&&<b><h5 className="redTextclass">Your Input was Invalid. Please try again</h5></b>}
   < br/>

    </div>
    </div>

    )
}

export default Login;
