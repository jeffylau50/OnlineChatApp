import React, { useContext, useState } from "react";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { useAuth } from "../context/AuthContext.js";
import Message from "./message.js";
import "./chat.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Picker from 'emoji-picker-react';


function Chat() {

const [formValue, setFormValue] = useState("");
const [channelValue, setChannel] = useState('1');
const [roomTitle, setTitle] = useState('Main Chat Room')
const [imageLink, setLink] = useState("https://res.cloudinary.com/djgjwxdih/image/upload/v1649830546/imgbin-computer-icons-online-chat-chat-room-scalable-graphics-group-conversation-FTvhDcxejscKBR40nrHc9GtXe_ywhal5.jpg")
const [emojiToggle, setEmoji] = useState(false)


  const messageRef = firestore.collection(channelValue);
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });


 

  const Navigate = useNavigate();
  const { user } = useAuth();
  const handleLogout = async () => {
    await auth.signOut();
    Navigate("/");
  };
  const handleChange = (evt) => {
    setFormValue(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { uid, photoURL } = await auth.currentUser;
    const {displayName}  = await auth.currentUser.multiFactor.user
    await messageRef.add({
      text: formValue,
      createdAt: new Date(),
      uid,
      photoURL,
      displayName
        });
    setFormValue("");
  };


const channel1Click = () => {
      setChannel('1')
      setTitle('Main Chat Room')
      setLink("https://res.cloudinary.com/djgjwxdih/image/upload/v1649830546/imgbin-computer-icons-online-chat-chat-room-scalable-graphics-group-conversation-FTvhDcxejscKBR40nrHc9GtXe_ywhal5.jpg")
  }
const channel2Click = () => {
    setChannel('2')
    setTitle('Soccer Chat Room')
    setLink("https://res.cloudinary.com/djgjwxdih/image/upload/v1649831030/football-goal-with-sun-and-blue-sky_2341003_gmmu9j.jpg")
}
const channel3Click = () => {
    setChannel('3')
    setTitle('NBA Chat Room')
    setLink("https://res.cloudinary.com/djgjwxdih/image/upload/v1649837533/121818_003_basket_wnnggd.jpg")
}
const toggleEmoji = () => {
setEmoji(!emojiToggle)
}


  const onEmojiClick = (event, emojiObject) => {
    setFormValue(prevInput => prevInput + emojiObject.emoji);
    setEmoji(false)
  }



  return (

    <div className="chats-page">
        <nav class="navbar navbar-expand-lg navbar-light navCustom">
  <a class="navbar-brand">&nbsp;&nbsp;🍊OrangeChat</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
    
      
      <li class="nav-item">
        <div onClick={handleLogout} class="nav-link cursorpointer" >Logout</div>
      </li>
     
    </ul>
  </div>
</nav>


      
      <body>
        <div class="container-fluid h-100">
          <div class="row justify-content-center h-100">
            <div class="col-md-4 col-xl-3 chat">
              <div class="card mb-sm-3 mb-md-0 contacts_card">
                <div class="card-header">
                  <div class="input-group">
                   <h4>Select Chat Room</h4>
                    <div class="input-group-prepend">
                      
                    </div>
                  </div>
                </div>
                <div class="card-body contacts_body">
                  <ui class="contacts">
                    <li onClick={channel1Click} className={channelValue==1?"active":''}>
                      <div class="d-flex bd-highlight">
                        <div class="img_cont">
                          <img
                            src="https://res.cloudinary.com/djgjwxdih/image/upload/v1649830546/imgbin-computer-icons-online-chat-chat-room-scalable-graphics-group-conversation-FTvhDcxejscKBR40nrHc9GtXe_ywhal5.jpg"
                            class="rounded-circle user_img"
                          />
                          <span class="online_icon"></span>
                        </div>
                        <div class="user_info">
                          <span>Main Chat Room</span>
                          <p>online</p>
                        </div>
                      </div>
                    </li>
                    <li onClick={channel2Click} className={channelValue==2?"active":''}>
                      <div class="d-flex bd-highlight">
                        <div class="img_cont">
                          <img
                            src="https://res.cloudinary.com/djgjwxdih/image/upload/v1649831030/football-goal-with-sun-and-blue-sky_2341003_gmmu9j.jpg"
                            class="rounded-circle user_img"
                          />
                          <span class="online_icon"></span>
                        </div>
                        <div class="user_info">
                          <span>Soccer Chat Room</span>
                          <p>online</p>
                        </div>
                      </div>
                    </li>
                    <li onClick={channel3Click} className={channelValue==3?"active":''}>
                      <div class="d-flex bd-highlight">
                        <div class="img_cont">
                          <img
                            src="https://res.cloudinary.com/djgjwxdih/image/upload/v1649837533/121818_003_basket_wnnggd.jpg"
                            class="rounded-circle user_img"
                          />
                          <span class="online_icon"></span>
                        </div>
                        <div class="user_info">
                          <span>NBA Chat Room</span>
                          <p>Online</p>
                        </div>
                      </div>
                    </li>

                  </ui>

                </div>
                <div class="card-footer"></div>
              </div>
            </div>

            <div class="col-md-8 col-xl-6 chat">
              <div class="card">
                <div class="card-header msg_head">
                  <div class="d-flex bd-highlight">
                    <div class="img_cont">
                      <img
                        src={imageLink}
                        class="rounded-circle user_img"
                      />
                      <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                      <span>{roomTitle}</span>
                    </div>
                  </div>
                  <span id="action_menu_btn">
                    <i class="fas fa-ellipsis-v"></i>
                  </span>
                </div>
                <div class="card-body msg_card_body">
                  {messages &&
                    messages.map((msg) => (
                      <Message key={msg.id} message={msg} />
                    ))}
                    
                </div>
                <div class="card-footer">

                  <div class="input-group">
                  {emojiToggle&&<Picker onEmojiClick={onEmojiClick} />}
                    <div class="input-group-append"></div>
                    <form className="formCSS  customfield" onSubmit={handleSubmit}>
                    <button onClick={toggleEmoji} type="button" className='attach_btn'>😀</button>
                      <textarea
                        className="form-control type_msg customInput1"
                        placeholder="Type your message..."
                        type="text"
                        value={formValue}
                        onChange={handleChange}
                        minLength={7}
                        required
                      ></textarea>
                      <div class="input-group-append">
                        <button className="input-group-text send_btn customButton1">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </body>

    </div>
  );
}

export default Chat;
