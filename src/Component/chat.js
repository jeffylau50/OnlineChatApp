import React, { useContext, useState } from "react";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { useAuth } from "../context/AuthContext.js";
import Message from "./message.js";
import "./chat.css";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Chat() {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

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

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">🍊OrangeChat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <body>
        <div class="container-fluid h-100">
          <div class="row justify-content-center h-100">
            <div class="col-md-4 col-xl-3 chat">
              <div class="card mb-sm-3 mb-md-0 contacts_card">
                <div class="card-header">
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Search..."
                      name=""
                      class="form-control search"
                    />
                    <div class="input-group-prepend">
                      <span class="input-group-text search_btn">
                        <i class="fas fa-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="card-body contacts_body">
                  <ui class="contacts">
                    <li class="active">
                      <div class="d-flex bd-highlight">
                        <div class="img_cont">
                          <img
                            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                            class="rounded-circle user_img"
                          />
                          <span class="online_icon"></span>
                        </div>
                        <div class="user_info">
                          <span>Chat Room</span>
                          <p>online</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex bd-highlight">
                        <div class="img_cont">
                          <img
                            src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg"
                            class="rounded-circle user_img"
                          />
                          <span class="online_icon offline"></span>
                        </div>
                        <div class="user_info">
                          <span>Taherah Big</span>
                          <p>Taherah left 7 mins ago</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex bd-highlight">
                        <div class="img_cont">
                          <img
                            src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg"
                            class="rounded-circle user_img"
                          />
                          <span class="online_icon"></span>
                        </div>
                        <div class="user_info">
                          <span>Sami Rafi</span>
                          <p>Sami is online</p>
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
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        class="rounded-circle user_img"
                      />
                      <span class="online_icon"></span>
                    </div>
                    <div class="user_info">
                      <span>Chat Room</span>
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
                    <div class="input-group-append"></div>
                    <form className="formCSS" onSubmit={handleSubmit}>
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
