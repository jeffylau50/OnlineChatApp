import React, { useContext, useState } from "react";
import './Login.css'
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Register(){

const { handleRegform } = useContext(AuthContext);
const handleRegclick = (evt) => {
        handleRegform();
    }
return(

<div id='log-card'>
    <img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1649463298/homeLogo_zasc7k.png' />
    <form className=''>
    <div className='card-body '>
    <div className="form-outline mb-1">
        <h3>Register New User</h3>
        <br />
        <input placeholder='Username' type='text' className='form-control form-control-md' id='username'/>
        </div>
        <br/>
        <div className="form-outline mb-3">
        <input placeholder='Password' className='form-control form-control-md' type='password' id='password' />
        </div>
        <Link to='/'><button onClick={handleRegclick} className='btn btn-primary btn-lg btn-block'>GO BACK</button></Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button type='button' className='btn btn-success btn-lg btn-block'>REGISTER</button>
        </div>
    </form>
    </div>
)

}

export default Register;