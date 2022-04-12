import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase'
import { useAuth } from '../context/AuthContext.js'
import Message from './message.js'
import './chat.css'
import {useCollectionData} from 'react-firebase-hooks/firestore';




function Chat() {

    const messageRef = firestore.collection('messages')
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});

    const Navigate = useNavigate();
    const { user } = useAuth();
    const handleLogout = async () => {
        await auth.signOut();
        Navigate("/")
    }
    const handleClick = () => {
    console.dir(messages)
    }

    return(
<div className='chats-page'>
   <div className='nav-bar'>
       <div className='logo-tab'>🍊OrangeChat</div>
       <div onClick={handleLogout} className='logout-tab'>Logout</div>
       </div>
{messages && messages.map(msg => <Message key={msg.idField} message={msg} />)}
<button onClick={handleClick}>test</button>       
</div>
)
}

export default Chat;