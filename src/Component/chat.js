import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase'
import { useAuth } from '../context/AuthContext.js'
import './chat.css'

const projectid = process.env.projectId


function Chat() {

    const Navigate = useNavigate();
    const { user } = useAuth();
    const handleLogout = async () => {
        await auth.signOut();
        Navigate("/")
    }

    return(
<div className='chats-page'>
   <div className='nav-bar'>
       <div className='logo-tab'>🍊OrangeChat</div>
       <div onClick={handleLogout} className='logout-tab'>Logout</div>
       </div>

       <ChatEngine
      height="calc(100vh - 66px)"
      projectId={''}
      userName={''}
      userSecret={''}
    /> 
</div>
)
}

export default Chat;