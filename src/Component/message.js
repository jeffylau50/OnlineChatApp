import React, { Component } from 'react';
import { auth } from '../firebase';



class Message extends Component {
    

   
    render(){ 
        
        const {text, uid} = this.props.message;
        return(
            <p>{text}</p>
        )
    }
}



export default Message