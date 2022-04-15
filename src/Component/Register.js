import React, { useContext, useState } from "react";
import firebase from "firebase/compat/app";

import './Login.css'
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register(){
    const navigate = useNavigate();

const iconLink = [
    'https://res.cloudinary.com/djgjwxdih/image/upload/v1649995397/Screenshot_2022-04-14_210008_wvw3no.png',
    'https://res.cloudinary.com/djgjwxdih/image/upload/v1649995405/dororo-png-2_pcdnhb.png',
    'https://res.cloudinary.com/djgjwxdih/image/upload/v1649995413/doraemon-1-1024x1024_dng0ec.jpg',
    'https://res.cloudinary.com/djgjwxdih/image/upload/v1649995419/158-1587770_doraemon-nobita-clipart-picture-of-doraemon_qti4ed.jpg',
    'https://res.cloudinary.com/djgjwxdih/image/upload/v1649995425/162-1620661_doraemon-y-nobita-hd-png-download_ohnupz.png',
    'https://res.cloudinary.com/djgjwxdih/image/upload/v1649995533/6856695_preview_sxnvtq.jpg',
    'https://res.cloudinary.com/djgjwxdih/image/upload/v1649995539/f4ed18e4f8c07a1688153de9daa5bd6c_huygmh.jpg',
    'https://res.cloudinary.com/djgjwxdih/image/upload/v1649995546/SC917-2_bahnlo.jpg'
]

const randomIcon = () => {
    let result = iconLink[Math.floor(Math.random()*iconLink.length)]
    return result
}

const { handleRegform } = useContext(AuthContext);
const [nameValue, setName] = useState('')
const [emailValue, setEmail] = useState('')
const [passwordValue, setPassword] = useState('')
const [iconValue, setIcon] = useState(randomIcon())
const handleRegclick = (evt) => {
        handleRegform();
    }
const handleName = (evt) => {
    setName(evt.target.value)
}

const handleEmail = (evt) => {
 setEmail(evt.target.value)
}

const handlePassword = (evt) => {
    setPassword(evt.target.value)
   }

const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, emailValue, passwordValue, nameValue, iconValue)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const user1 = firebase.auth().currentUser;
      user1.updateProfile({
          displayName: nameValue, photoURL: iconValue
      })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    handleRegform();
    navigate('/chat')

}

const newIcon = () => {
    let result = iconLink[Math.floor(Math.random()*iconLink.length)]
    setIcon(result)
}
   
const auth = getAuth();

 
    
return(

<div id='log-card'>
    <img src='https://res.cloudinary.com/djgjwxdih/image/upload/v1649463298/homeLogo_zasc7k.png' />
    <form onSubmit={handleSubmit}>
    <div className='card-body '>
    <div className="form-outline mb-1">
        <h3>Register New User</h3>
        <br/>
        <input onChange={handleName} type='text' placeholder="Display Name" className='form-control form-control-md'/>
        <br />
        <input onChange={handleEmail} type='email' placeholder='Email' className='form-control form-control-md' id='email'/>
        </div>
        <br/>
        <div className="form-outline mb-3">
        <input onChange={handlePassword} placeholder='Password' className='form-control form-control-md' type='password' id='password' />
        </div>
        <label>Click refresh button for a different icon&nbsp;&nbsp;&nbsp;</label>
        <button onClick={newIcon} type='button' className='btn btn-primary btn-sm btn-block'>Refresh</button>
        <br/>         <br/>
        <img src={iconValue} className='iconCustom'/>
        <br/> <br/> <br/>
        <Link to='/'><button onClick={handleRegclick} className='btn btn-primary btn-lg btn-block'>GO BACK</button></Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button className='btn btn-success btn-lg btn-block'>REGISTER</button>
        </div>
    </form>
    </div>
)

}

export default Register;