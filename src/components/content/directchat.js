import React, { useRef, useState } from "react";

import firebase from "firebase/app";
import Init from "./initialize.js";
import "firebase/auth";
import "firebase/firestore";
import "./directchat.css";

// hooks
import { useCollectionData } from "react-firebase-hooks/firestore";

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
    const { uid, email, displayName } = auth.currentUser;
    const chatRef = firestore.collection(uid);
    const query = chatRef.orderBy("createdAt").limit(50);

    const [ message, setMessage ] = useState("");

    const [ chats ] = useCollectionData(query, { idField: 'id' });

    const submitChat = async (e) => {
        e.preventDefault();

        await chatRef.add({
            message: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email,
            displayName
        });

        setMessage("");
    }

    return (
        <div className="chat">
            { chats && chats.map(chat => <ChatMessage key={chat.id} message={chat} />) }

            <form onSubmit={submitChat}>
                <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message!" />

                <button className="btn btn-success" type="submit" disabled={!message}>Submit</button>
            </form>
        </div>
    )
}

function ChatMessage(props) {
    const { message, email, displayName } = props.message;

    return (
        <div className="poggers">
            <p>{message}, {displayName}, {email}</p>
        </div>
    )
}

function LoginPlease() {
    return (
        <div className="login-please">
            <h1>Please Log In</h1>
        </div>
    )
}


export { Chat, LoginPlease, Login, Logout, auth }
