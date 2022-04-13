import React, { useContext, useState } from "react";
import firebase from 'firebase/compat/app';
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
  const {uid, photoURL} = auth.currentUser;
  await messageRef.add({
  text: formValue,
  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  uid,
  photoURL
  })
  setFormValue('')
  }

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">🍊OrangeChat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      {messages &&
        messages.map((msg) => <Message key={msg.id} message={msg} />)}

      <form onSubmit={handleSubmit}>
        <input type="text" value={formValue} onChange={handleChange} />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Chat;
