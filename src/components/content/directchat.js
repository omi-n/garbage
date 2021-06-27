import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import Init from "./initialize.js";
import "firebase/auth";
import "firebase/firestore";
import "./directchat.css";
const { admin } = require("./adminEmail.json");

// hooks


Init();

const firestore = firebase.firestore();
const auth = firebase.auth();

function Login() {
    const google = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className="login">
            <button className="btn btn-primary" onClick={google}>Sign In With Google</button>
        </div>
    )
}

function Logout() {
    return auth.currentUser && (
        <div className="login">
            <button className="btn btn-danger" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

function Chat() {
    const email = auth.currentUser.email;
    let adminStatus = false;
    if(email === admin) adminStatus = true;
    return (
        <div>
            { adminStatus ? <AdminChat /> : <UserChat /> }
        </div>
    )
}

function UserChat() {
    const { email, displayName } = auth.currentUser;
    const chatRef = firestore.collection(email);
    const query = chatRef.orderBy("createdAt").limit(50);

    const [ chat, setChat ] = useState("");

    const [ chats ] = useCollectionData(query, { idField: 'id' });

    const submitChat = async (e) => {
        e.preventDefault();

        await chatRef.add({
            message: chat,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email,
            displayName
        });

        setChat("");
    }

    return (<div>
        <div className="chat-user">
            { chats && chats.map(chat => <ChatMessageUser key={chat.id} message={chat} />) }

            <form onSubmit={submitChat}>
                <input value={chat} onChange={(e) => setChat(e.target.value)} placeholder="Message!" />

                <button className="btn btn-success" type="submit" disabled={!chat}>Submit</button>
            </form>
        </div>
    </div>)
}

function AdminChat() {
    const { email, displayName } = auth.currentUser;
    const chatRef = firestore.collection(email);
    const query = chatRef.orderBy("createdAt").limit(50);

    const [ chat, setChat ] = useState("");
    const [ message, setMessage ] = useState("");

    const [ chats ] = useCollectionData(query, { idField: 'id' });
    

    const msgRef = firestore.collection("nomi000@citymail.cuny.edu");
    const queryMsg = msgRef.orderBy("createdAt").limit(50);

    const [ chatsE ] = useCollectionData(queryMsg, { idField: 'id' });

    const submitChat = async (e) => {
        e.preventDefault();

        await chatRef.add({
            message: chat,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email,
            displayName
        });

        setChat("");
    }

    const submitMsg = async (e) => {
        e.preventDefault();

        await msgRef.add({
            message: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email,
            displayName
        });

        setMessage("");
    }

    return (<div>
        <div className="chat-admin">
            { chats && chats.map(chat => <ChatMessage key={chat.id} message={chat} />) }

            <form className="chat-submit" onSubmit={submitChat}>
                <input value={chat} onChange={(e) => setChat(e.target.value)} placeholder="Message!" />

                <button className="btn btn-success" type="submit" disabled={!chat}>Submit</button>
            </form>
        </div>
        <div className="chat-admin">
            { chatsE && chatsE.map(chat => <ChatMessage key={chat.id} message={chat} />) }

            <form onSubmit={submitMsg}>
                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message!" />

                <button className="btn btn-success" type="submit" disabled={!message}>Submit</button>
            </form>
        </div>
    </div>)
}

function ChatMessage(props) {
    const { message, email, displayName } = props.message;
    const removeMessage = async(e) => {
        e.preventDefault();

        await firestore.collection(email).doc(props.message.id).delete();
    }

    return (
        <div className="chat-admin-message">
            <p>{message}, {displayName}, {email} <button onClick={removeMessage} className="btn btn-outline-danger">Delete</button></p>
        </div>
    )
}

function ChatMessageUser(props) {
    const { message, email, displayName } = props.message;

    return (
        <div className="chat-admin-message">
            <p>{message}, {displayName}, {email}</p>
        </div>
    )
}


function LoginPlease() {
    return (
        <div className="login-please">
            <h1>Please Sign In</h1>
            <p>This is so that the messages sent to me are private, and properly managed.</p>

            <p>There will me more ways to sign in very soon!</p>
        </div>
    )
}


export { Chat, LoginPlease, Login, Logout, auth }
