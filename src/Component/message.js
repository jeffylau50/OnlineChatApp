import React, { Component } from 'react';
import { auth } from '../firebase';
import "./message.css";



function Message(props) {
    

   
    
        
        const {text, uid, photoURL, createdAt, displayName} = props.message;
        
        let newTime = createdAt.toDate().toString();
        let gg = newTime.slice(15,21)
        console.log(gg)
        //const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received' ;
        //let convertime = new Date(createdAt.seconds*1000)
        //let finalTime = convertime.toString().slice(15,21)
        //let finalDate = convertime.toString().slice(3,15)
        
        //console.log(displayName)
        return(
            <div>

            <div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img src={photoURL} class="rounded-circle user_img_msg" />
								</div>
								<div class="msg_cotainer">
                                    <b>{displayName}</b>
                                    <br />
									{text}
									<span class="msg_time customTimestamp">{gg}</span>
								</div>
                                

							</div>

            </div>
        )
    }




export default Message