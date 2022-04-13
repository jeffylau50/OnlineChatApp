import React, { Component } from 'react';
import { auth } from '../firebase';



class Message extends Component {
    

   
    render(){ 
        
        const {text, uid, photoURL} = this.props.message;
        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received' ;

        return(
            <div>
            <img src={photoURL} />
            <p>{text}</p>
            </div>
        )
    }
}



export default Message