import React, { Component } from 'react';
import { auth } from '../firebase';
import "./message.css";



function Message(props) {
    

   
    
        
        const {text, uid, photoURL, createdAt, displayName} = props.message;
        
        let newTime = createdAt.toDate().toString();
        let timeStamp = newTime.slice(15,21)
        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received' ;
        const status = uid === auth.currentUser.uid

        //let convertime = new Date(createdAt.seconds*1000)
        //let finalTime = convertime.toString().slice(15,21)
        //let finalDate = convertime.toString().slice(3,15)
        
        //console.log(displayName)
        return(
            <div>

            <div class={status?"d-flex justify-content-end mb-4":"d-flex justify-content-start mb-4"}>
								<div class="img_cont_msg">
									<img src={photoURL} class="rounded-circle user_img_msg" />
								</div>
								<div class={status?"msg_cotainer_send":"msg_cotainer"}>
                                    <b>{status?'':displayName}</b>
                                    {status?'':<br />}
									{text}
									<span class="msg_time customTimestamp">{timeStamp}</span>
								</div>
                                

							</div>

            </div>
        )
    }




export default Message