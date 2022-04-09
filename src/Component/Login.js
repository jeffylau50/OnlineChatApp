import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import './Login.css'
import '../Pics/homeLogo.PNG'

function Login(){
    return(
    <div id='log-page' >
    <div id='log-card'>
    <img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1649463298/homeLogo_zasc7k.png' />
    <br/>
    <div className='log-button google'>
    <GoogleOutlined /> Sign in with your Google
    </div>
    < br/>
    < br/>
    <div className='log-button facebook'> 
    <FacebookOutlined /> Sign in with Facebook
    </div>
    </div>
    </div>
    )
}

export default Login;